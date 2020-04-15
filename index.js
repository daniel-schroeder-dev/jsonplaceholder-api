if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./src/db/connect');

const app = express();
const PORT = process.env.PORT || 3000;
const Post = mongoose.model('Post');
const parseJSON = bodyParser.json();

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.options('/posts', (req, res, next) => {
  res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'content-type');
  res.set('Access-Control-Max-Age', 86400);
  res.sendStatus(200);
});

app.get('/posts', (req, res, next) => {
  Post.find({})
    .then(posts => res.json(posts))
    .catch(console.error);
});

app.get('/posts/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(console.error);
});

app.post('/posts', parseJSON, (req, res, next) => {
  res.status(201).json(req.body);
});

app.post('/posts/new', parseJSON, (req, res, next) => {
  new Post(req.body).save().then(post => res.status(201).json(post));
});

app.listen(PORT, () => {
  console.log(`jsonplaceholder-api up at: ${PORT}`);
});
