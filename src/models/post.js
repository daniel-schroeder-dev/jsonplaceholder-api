const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  body: String,
});

mongoose.model('Post', postSchema);