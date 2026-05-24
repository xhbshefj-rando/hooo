const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static frontend files automatically
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Mock database for live storage (Replace with SQLite/MySQL for permanent storage)
let dynamicServers = [
    { id: 1, name: "Official US East #1", track: "Unadilla 2026", players: 14, maxPlayers: 20, ping: 42 },
    { id: 2, name: "EU Pro Practice [Realism]", track: "Ernee", players: 8, maxPlayers: 40, ping: 110 },
    { id: 3, name: "🔴 My Custom Dedicated Server", track: "Washougal", players: 0, maxPlayers: 16, ping: 15 }
];

let leaderboard = [
    { position: 1, name: "Rider_Alpha", track: "Unadilla 2026", time: "1:42.302" },
    { position: 2, name: "BraapMaster", track: "Unadilla 2026", time: "1:43.115" },
    { position: 3, name: "ScrubKing", track: "Unadilla 2026", time: "1:44.009" }
];

// API Endpoint: Get current live servers
app.get('/api/servers', (req, res) => {
    res.json(dynamicServers);
});

// API Endpoint: Get top lap times
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// API Endpoint: Submit a new lap time from the game/user
app.post('/api/laptime', (req, res) => {
    const { name, track, time } = req.body;
    if (!name || !track || !time) {
        return res.status(400).json({ error: "Missing rider parameters" });
    }
    const newEntry = { position: leaderboard.length + 1, name, track, time };
    leaderboard.push(newEntry);
    res.status(201).json({ message: "Lap time logged successfully!", leaderboard });
});

// Start the portal application
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 MX Bikes Portal is LIVE at http://localhost:${PORT}`);
    console.log(`==================================================`);
});

