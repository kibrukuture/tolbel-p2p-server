import { PeerServer } from 'peer';
import dotenv from 'dotenv';
dotenv.config();

const peerServer = PeerServer({ port: process.env.PEER_TO_PEER_PORT, path: '/' });

// on connection
peerServer.on('connection', (client) => {
  console.log('Client connected', client.id);
});

// on disconnection
peerServer.on('disconnect', (client) => {
  console.log('Client disconnected', client.id);
});

// on error
peerServer.on('error', (err) => {
  console.log(err);
});

// on message
peerServer.on('message', (client, message) => console.log('Client message', client.id, message));

console.log('PeerJs server is running at port:', process.env.PEER_TO_PEER_PORT);
