// model.js
const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Defaults to current date if not provided
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  phone: {
    type: String,
    required: true,
    unique: true, // Ensure phone numbers are unique
  },
});

// Create and export the model
module.exports = mongoose.model('User', userSchema);
