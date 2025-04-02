const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  txHash: String,
  contributor: String,
  amount: String,
  timestamp: { type: Date, default: Date.now }
});
const Transaction = mongoose.model('Transaction', transactionSchema);

// API to save a transaction
app.post('/api/transactions', async (req, res) => {
  const { txHash, contributor, amount } = req.body;
  try {
    const transaction = new Transaction({ txHash, contributor, amount });
    await transaction.save();
    res.status(201).send(transaction);
  } catch (err) {
    res.status(500).send({ error: 'Failed to save transaction: ' + err.message });
  }
});

// API to get all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.send(transactions);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch transactions: ' + err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));