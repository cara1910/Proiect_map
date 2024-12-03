const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware pentru date JSON (dacă este necesar)
app.use(express.json());

// Servește fișierele statice pentru frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Rutele pentru API (backend)
app.get('/api/data', (req, res) => {
    res.json({ message: "Aceasta este o cerere API!" });
});

// Route catch-all pentru frontend (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Middleware pentru erori
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ceva nu a mers bine!');
});

// Ascultă pe portul 8080
app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});