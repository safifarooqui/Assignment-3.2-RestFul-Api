const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sports_teams', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a schema for players
const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  rushing_yards: Number,
  touchdowns_thrown: Number,
  sacks: Number,
  made_field_goals: Number,
  missed_field_goals: Number,
  catches_made: Number
});

// Create a player model
const Player = mongoose.model('Player', playerSchema);

// Create Express app
const app = express();
app.use(bodyParser.json());

// Add a new player
app.post('/players', (req, res) => {
  const newPlayer = new Player(req.body);
  newPlayer.save()
    .then(() => {
      res.status(201).send('Player added successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error adding player');
    });
});

// Update a player
app.put('/players/:id', (req, res) => {
  const playerId = req.params.id;
  Player.findByIdAndUpdate(playerId, req.body)
    .then(() => {
      res.status(200).send('Player updated successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error updating player');
    });
});

// Delete a player
app.delete('/players/:id', (req, res) => {
  const playerId = req.params.id;
  Player.findByIdAndRemove(playerId)
    .then(() => {
      res.status(200).send('Player deleted successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error deleting player');
    });
});

// Retrieve all players
app.get('/players', (req, res) => {
  Player.find({})
    .then(players => {
      res.status(200).json(players);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving players');
    });
});

// Retrieve players with rushing yards greater than a given value
app.get('/players/rushing-yards/:value', (req, res) => {
  const value = req.params.value;
  Player.find({ rushing_yards: { $gt: value } })
    .then(players => {
      res.status(200).json(players);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving players');
    });
});

// Retrieve players with touchdowns thrown greater than a given value
app.get('/players/touchdowns-thrown/:value', (req, res) => {
  const value = req.params.value;
  Player.find({ touchdowns_thrown: { $gt: value } })
    .then(players => {
      res.status(200).json(players);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving players');
    });
});

// Retrieve players with sacks greater than a given value
app.get('/players/sacks/:value', (req, res) => {
  const value = req.params.value;
  Player.find({ sacks: { $gt: value } })
    .then(players => {
      res.status(200).json(players);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving players');
    });
});

// Get the player with the most touchdown passes
app.get('/players/most-touchdown-passes', (req, res) => {
  Player.findOne().sort({ touchdowns_thrown: -1 })
    .then(player => {
      res.status(200).json(player);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving player');
    });
});

// Get the player with the most rushing yards
app.get('/players/most-rushing-yards', (req, res) => {
  Player.findOne().sort({ rushing_yards: -1 })
    .then(player => {
      res.status(200).json(player);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving player');
    });
});

// Get the player with the least rushing yards
app.get('/players/least-rushing-yards', (req, res) => {
  Player.findOne().sort({ rushing_yards: 1 })
    .then(player => {
      res.status(200).json(player);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving player');
    });
});

// Get a list of players sorted by most to fewest field goals made
app.get('/players/most-to-fewest-field-goals', (req, res) => {
  Player.find().sort({ made_field_goals: -1 })
    .then(players => {
      res.status(200).json(players);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving players');
    });
});

// Get the player with the most number of sacks
app.get('/players/most-sacks', (req, res) => {
  Player.findOne().sort({ sacks: -1 })
    .then(player => {
      res.status(200).json(player);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving player');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
