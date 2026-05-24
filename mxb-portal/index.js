const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Mock database storage
let dynamicServers = [
    { id: 1, name: "Official US East #1", track: "Unadilla 2026", players: 14, maxPlayers: 20, ping: 42 },
    { id: 2, name: "EU Pro Practice [Realism]", track: "Ernee", players: 8, maxPlayers: 40, ping: 110 }
];

let leaderboard = [
    { position: 1, name: "Rider_Alpha", track: "Unadilla 2026", time: "1:42.302" }
];

// 1. Serve the frontend layout directly on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. Data Endpoints
app.get('/api/servers', (req, res) => res.json(dynamicServers));
app.get('/api/leaderboard', (req, res) => res.json(leaderboard));

app.post('/api/laptime', (req, res) => {
    const { name, track, time } = req.body;
    if (!name || !track || !time) return res.status(400).json({ error: "Missing parameters" });
    const newEntry = { position: leaderboard.length + 1, name, track, time };
    leaderboard.push(newEntry);
    res.status(201).json({ message: "Lap logged!", leaderboard });
});

// Open local network channels or export for cloud system
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`🚀 MX Bikes local dev server running on port ${PORT}`));
}

module.exports = app;
