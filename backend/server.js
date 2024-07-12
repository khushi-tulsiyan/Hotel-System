const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotel-management', { useNewUrlParser: true, useUnifiedTopology: true });

// Load routes
const roomRoutes = require('./routes/rooms');
app.use('/api/rooms', roomRoutes);

// WebSocket connection
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
