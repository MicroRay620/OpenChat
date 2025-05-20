use libp2p::{
    core::upgrade,
    floodsub::{Floodsub, FloodsubEvent, Topic},
    identity, mdns, noise,
    swarm::{NetworkBehaviour, SwarmEvent},
    tcp, yamux, Multiaddr, PeerId, Swarm, Transport,
};

use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use std::error::Error;
use std::time::Duration;
use tokio::sync::mpsc;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum MessageType {
    Text,
    Image,
    Video,
    File,
    ScreenShare,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ChatMessage {
    pub id: String,
    pub sender: String,
    pub content: String,
    pub timestamp: u64,
    pub msg_type: MessageType,
    pub channel_id: Option<String>,
    pub reply_to: Option<String>,
}

pub struct OCSuccessorBehaviour {
    floodsub: Floodsub,
    cfg: mdns::Config,
    response_sender: mpsc::UnboundedSender<ChatMessage>,
}

impl OCSuccessorBehaviour {
    fn on_floodsub(&mut self, event: FloodsubEvent) {
        if let FloodsubEvent::Message(message) = event {
            if let Ok(chat_message) = serde_json::from_slice::<ChatMessage>(&message.data) {
                println!(
                    "Received message: {:?} from {:?}",
                    chat_message.content, message.source
                );

                // Send the message to the processing pipeline
                if let Err(e) = self.response_sender.send(chat_message.clone()) {
                    println!("Error sending message via channel: {}", e);
                }
            }
        }
    }
    // Handle mdns events (peer discovery)
    fn on_mdns(&mut self, event: mdns::Event) {
        match event {
            mdns::Event::Discovered(peers) => {
                for (peer, addr) in peers {
                    println!("Discovered peer: {}", peer);
                    self.floodsub.add_node_to_partial_view(peer);
                }
            }
            mdns::Event::Expired(peers) => {
                for (peer, _addr) in peers {
                    println!("Peer expired: {}", peer);
                    self.floodsub.remove_node_from_partial_view(&peer);
                }
            }
        }
    }
}
