require('dotenv').config();
require('../db/connect');

const mongoose = require('mongoose');
const faker = require('faker');

const Post = mongoose.model('Post');

for (let i = 0; i < 100; i++) {
  new Post({
    userId: i + 1,
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
  }).save();
};
