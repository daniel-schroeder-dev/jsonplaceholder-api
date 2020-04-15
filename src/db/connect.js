const mongoose = require('mongoose');

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/jsonplaceholder-api', connectOptions)
  .catch(console.error);

mongoose.connection.on('error', console.error);
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected:`);
});
