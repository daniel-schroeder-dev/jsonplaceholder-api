if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

require('./src/db/connect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`jsonplaceholder-api up at: ${PORT}`);
});
