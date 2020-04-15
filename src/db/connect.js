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
  require('../models/post');
  console.log(`Mongoose connected at: ${process.env.MONGO_DB_URI}`);
});
