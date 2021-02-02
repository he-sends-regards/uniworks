const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const router = require('./routes/auth.routes.js');

const app = express();

app.use('/api/auth', router);

const PORT = config.get('port') // process.env.PORT ?? 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })


    app.get('/', (req, res) => {
      res.send('<h1>hello express js</h1>')
    })

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (error) {
    console.log('Server error: ', error.message);
    process.exit(1);
  }
};

start()