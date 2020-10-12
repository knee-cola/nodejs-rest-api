const express = require('express');
const mongoose = require('mongoose');

const app = express();


// Middlewares
app.use('/posts', () => {
    console.log("this is a middlwware running");
});

// ROUTES
app.get('/posts', (req,res) => {
    res.send("We are posts...");
});

mongoose.connect('mongodb://localhost:27017/rest', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongo succesfully'))
    .catch((error) => {
        console.log('error connected to DB', error);
    });

app.listen(3000);