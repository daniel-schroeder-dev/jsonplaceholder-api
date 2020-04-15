if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('./src/db/connect');

const app = express();
const PORT = process.env.PORT || 3000;
const Post = mongoose.model('Post');

app.use(morgan('dev'));

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

app.post('/posts');

app.listen(PORT, () => {
  console.log(`jsonplaceholder-api up at: ${PORT}`);
});
