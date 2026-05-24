const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

let dynamicServers = [
    { id: 1, name: "Official US East #1", track: "Unadilla 2026", players: 14, maxPlayers: 20, ping: 42 },
    { id: 2, name: "EU Pro Practice [Realism]", track: "Ernee", players: 8, maxPlayers: 40, ping: 110 }
];

let leaderboard = [
    { position: 1, name: "Rider_Alpha", track: "Unadilla 2026", time: "1:42.302" }
];

app.get('/api/servers', (req, res) => res.json(dynamicServers));
app.get('/api/leaderboard', (req, res) => res.json(leaderboard));

app.post('/api/laptime', (req, res) => {
    const { name, track, time } = req.body;
    if (!name || !track || !time) return res.status(400).json({ error: "Missing parameters" });
    const newEntry = { position: leaderboard.length + 1, name, track, time };
    leaderboard.push(newEntry);
    res.status(201).json({ message: "Lap logged!", leaderboard });
});

// CRITICAL: Export the app module for Vercel's serverless environment
module.exports = app;
