use libp2p::{
    core::{muxing::StreamMuxerBox, transport::OrTransport, upgrade},
    floodsub::{Floodsub, FloodsubEvent, Topic},
    futures::{future::Either, StreamExt},
    gossipsub::{self, Config, Event, MessageAuthenticity},
    identity::{self, Keypair},
    mdns, noise,
    swarm::{Config as SwarmConfig, NetworkBehaviour, SwarmEvent},
    tcp, yamux, Multiaddr, PeerId, Swarm, Transport,
};

use serde::{Deserialize, Serialize};
use std::collections::hash_map::DefaultHasher;
use std::collections::HashSet;
use std::error::Error;
use std::hash::{Hash, Hasher};
use std::sync::{Arc, Mutex};
use std::time::Duration;
use tokio::sync::mpsc;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum MessageType {
    Text,
    Image,
    Video,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum ChatMessage {
    UserMessage {
        sender_id: String,
        content: String,
        timestamp: u64,
        channel_id: String,
    },
    PresenceUpdate {
        user_id: String,
        status: UserStatus,
    },
    ScreenShareStart {
        user_id: String,
        metadata: ScreenShareMetadata,
    },
    ScreenShareData {
        user_id: String,
        chunk_id: u32,
        data: Vec<u8>,
    },
    ScreenShareEnd {
        user_id: String,
    },
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum UserStatus {
    Online,
    Away,
    DoNotDisturb,
    Invisible,
    Offline,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ScreenShareMetadata {
    pub width: u32,
    pub height: u32,
    pub fps: u8,
    pub encoding: String,
}

#[derive(NetworkBehaviour)]
struct ChatBehavior {
    mdns: mdns::tokio::Behaviour,
    gossipsub: gossipsub::Behaviour,
}

// Helper to create consistent topic hashes for channels
fn topic_hash(name: &str) -> Topic {
    let mut s = DefaultHasher::new();
    name.hash(&mut s);
    Topic::new(format!("{:x}", s.finish()))
}

pub struct P2PManager {
    swarm: Swarm<ChatBehavior>,
    subscribed_channels: HashSet<String>,
    message_sender: mpsc::Sender<ChatMessage>,
}

impl P2PManager {
    pub async fn new() -> Result<(Self, mpsc::Receiver<ChatMessage>), Box<dyn Error>> {
        let id_keys = identity::Keypair::generate_ed25519();
        let peer_id = PeerId::from(id_keys.public());

        // Set up gossipsub configuration
        let gossipsub_config = Config::default();
        let gossipsub: gossipsub::Behaviour = gossipsub::Behaviour::new(
            MessageAuthenticity::Signed(id_keys.clone()),
            gossipsub_config,
        )?;

        // Create behavior with both mDNS and gossipsub
        let behavior = ChatBehavior {
            mdns: mdns::tokio::Behaviour::new(mdns::Config::default(), peer_id)?,
            gossipsub,
        };

        let transport = tcp::tokio::Transport::default()
            .upgrade(upgrade::Version::V1Lazy)
            .authenticate(noise::Config::new(&id_keys)?)
            .multiplex(yamux::Config::default())
            .boxed();

        // Create Swarm configuration
        let swarm_config = libp2p::swarm::Config::with_tokio_executor();

        // Create the Swarm with all required parameters
        let swarm = Swarm::new(transport, behavior, peer_id, swarm_config);

        let (sender, receiver) = mpsc::channel(32);

        Ok((
            Self {
                swarm,
                subscribed_channels: HashSet::new(),
                message_sender: sender,
            },
            receiver,
        ))
    }
}

#[tauri::command]
pub async fn join_channel(channel_id: String) -> Result<(), String> {
    todo!("store a p2pManager here");
    Ok(())
}

#[tauri::command]
pub async fn send_message(channel_id: String, content: String) -> Result<(), String> {
    todo!("send a message to the channel");
    Ok(())
}
