const express = require('express');
const Room = require('../models/Room');

const router = express.Router();

router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

router.post('/', async (req, res) => {
  const newRoom = new Room(req.body);
  await newRoom.save();
  res.json(newRoom);
});

module.exports = router;
