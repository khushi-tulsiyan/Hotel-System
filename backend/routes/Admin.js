const express = require('express');
const Room = require('../models/Room');

module.exports = (io) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
  });

  router.post('/', async (req, res) => {
    const newRoom = new Room(req.body);
    await newRoom.save();
    io.emit('roomUpdate', newRoom); // Emit event on room update
    res.json(newRoom);
  });

  return router;
};
