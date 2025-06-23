// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve your HTML from /public

app.get('/log-ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${ip}\n`;

  fs.appendFile('ip-log.txt', logEntry, err => {
    if (err) console.error('Failed to log IP:', err);
  });

  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
