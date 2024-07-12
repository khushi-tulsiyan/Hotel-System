const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: Number,
  status: String,
  guest: {
    name: String,
    checkIn: Date,
    checkOut: Date,
  }
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
