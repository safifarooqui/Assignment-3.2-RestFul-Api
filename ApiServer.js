const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Player = require('./models/Player');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/unit2-hw', {useNewUrlParser: true, useUnifiedTopology: true});

// Endpoints

// GET all players
app.get('/players', async (req, res) => {
  const players = await Player.find({});
  res.json(players);
});

// GET a player by ID
app.get('/players/:id', async (req, res) => {
  const player = await Player.findById(req.params.id);
  res.json(player);
});

// POST new player
app.post('/players', async (req, res) => {
  const newPlayer = new Player(req.body);
  const savedPlayer = await newPlayer.save();
  res.json(savedPlayer);
});

// PUT (update) existing player
app.put('/players/:id', async (req, res) => {
  const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(updatedPlayer);
});

// DELETE player
app.delete('/players/:id', async (req, res) => {
  const deletedPlayer = await Player.findByIdAndRemove(req.params.id);
  res.json(deletedPlayer);
});

// Running the server
app.listen(3000, () => console.log('Server running on port 3000'));
