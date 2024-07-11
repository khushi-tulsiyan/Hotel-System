const express  = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;


mongoose.connect('mongodb://localhost:27017/hotel-management',{ useNewUrlParser: true, useUnifiedTopology: true } );

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hotel Management API');
});

app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});