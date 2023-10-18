const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the user model
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors()); // Enable CORS for all routes
// Connect to MongoDB Atlas
mongoose.connect("mongodb://127.0.0.1:27017/Brands", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Atlas connected');
  })
  .catch((err) => {
    console.error('MongoDB Atlas connection error:', err);
  });

  const brandsData = [
    'VISA', 'TymeBank', 'Spotify', 'Microsoft', 'Engen',
    'Nike', 'Wesgro', 'Multichoice', 'PicknPay', 'Liquid',
    'Sanlam', 'Santam', 'BBC'
  ];
  
  //  CORS Enabled to allow requests from your React app
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update with your React app's URL
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
  app.get('/api/brands', (req, res) => {
    res.json(brandsData);
  });
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
