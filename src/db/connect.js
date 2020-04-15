require('../models/post');
const mongoose = require('mongoose');

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('debug', true);

mongoose.connect(process.env.MONGO_DB_URI, connectOptions)
  .catch(console.error);

mongoose.connection.on('error', console.error);
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected at: ${process.env.MONGO_DB_URI}`);
});
