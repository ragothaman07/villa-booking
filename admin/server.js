// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./model'); // Import the Mongoose model

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON requests

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true, // Avoid deprecation warnings
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('Could not connect to MongoDB', err));

// Route to create a new user
app.post('/users', async (req, res) => {
  const { name, email, phone } = req.body;
console.log(name);;
res.json({message:req.body});
//   try {
//     const user = new User({ name, email, phone });
//     await user.save();
//     res.status(201).send(user);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
});

// Route to fetch all users
app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
