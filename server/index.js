const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
