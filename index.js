const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// In-memory store for demonstration
let tickets = [
  { id: 1, title: "Login Issue", status: "Open", description: "User cannot login." },
  { id: 2, title: "Payment Failed", status: "Pending", description: "Transaction didn't go through." },
];

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });
});

app.get('/api/tickets', (req, res) => {
  res.json(tickets);
});

app.post('/api/summary', (req, res) => {
  const { ticketId } = req.body;
  const ticket = tickets.find(t => t.id === ticketId);
  if (!ticket) return res.status(404).json({ error: 'Ticket not found.' });

  const summary = Summary: ${ticket.title} - ${ticket.description};
  res.json({ summary });
});

app.post('/api/resolve', (req, res) => {
  const { ticketId } = req.body;
  const ticket = tickets.find(t => t.id === ticketId);
  if (!ticket) return res.status(404).json({ error: 'Ticket not found.' });

  const suggestion = "Resolution suggestion: Please verify the user account or escalate if not solved.";
  res.json({ suggestion });
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const reply = generateAgentResponse(message);
  res.json({ reply });
});

// Mock LLM agent response
function generateAgentResponse(message) {
  if (message.toLowerCase().includes("payment")) {
    return "It seems like a payment issue. Please ensure your card is active.";
  }
  if (message.toLowerCase().includes("login")) {
    return "Try resetting your password or checking your internet connection.";
  }
  return "Can you provide more details so I can help better?";
}

app.listen(PORT, () => {
  console.log("Server running at http://localhost:${PORT}");
});