const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

const app = express();

// Import routes
const postsRoute = require('./routes/posts');

// Middlewares
app.use(bodyParser.json()); // parses request body to JSON

// ROUTES
app.use('/posts', postsRoute);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongo succesfully'))
    .catch((error) => {
        console.log('error connected to DB', error);
    });

app.listen(3000);