const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Servește fișierele statice pentru frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutele pentru API (backend)
app.get('/api/data', (req, res) => {
    res.json({ message: "Aceasta este o cerere API!" });
});

// Route catch-all pentru frontend (dacă nu există alte rute API)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Ascultă pe portul 8080
app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});
