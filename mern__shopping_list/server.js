//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();
// Bodyparser Middleware
app.use(bodyParser.json());

//DB Config connecting monogDB
const db = require('./config/keys').mongoURI;

//Connect to Mongo 
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
//Use Routes
app.use('/api/items', items)

//need env when deploying with heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))