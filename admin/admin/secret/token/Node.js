// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const allowedEmails = ['you@example.com', 'admin@voidclub.com'];
const codes = {}; // Stores codes temporarily

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com',
    pass: 'your-app-password' // Use an app-specific password or OAuth
  }
});

app.post('/send-code', (req, res) => {
  const { email } = req.body;
  if (!allowedEmails.includes(email)) return res.status(403).send('Email not allowed');

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codes[email] = code;

  transporter.sendMail({
    from: '"VoidBot Auth" <yourgmail@gmail.com>',
    to: email,
    subject: 'Your verification code',
    text: `Your VoidBot access code is: ${code}`
  });

  res.send('Code sent');
});

app.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  if (codes[email] === code) {
    delete codes[email];
    res.send('Access granted');
  } else {
    res.status(401).send('Invalid code');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));
