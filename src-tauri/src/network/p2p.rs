use libp2p::{
    core::{muxing::StreamMuxerBox, transport::OrTransport, upgrade},
    floodsub::{Floodsub, FloodsubEvent, Topic},
    futures::StreamExt,
    gossipsub::{self, Config, Event, MessageAuthenticity},
    identity,
    identity::Keypair,
    mdns, noise,
    swarm::{NetworkBehaviour, SwarmEvent},
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

// #[derive(Serialize, Deserialize, Debug, Clone)]
// pub enum MessageType {
//     Text,
//     Image,
//     Video,

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

// Helper to create consistent topic hashes for channels
fn topic_hash(name: &str) -> Topic {
    let mut s = DefaultHasher::new();
    name.hash(&mut s);
    Topic::new(format!("{:x}", s.finish()))
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
