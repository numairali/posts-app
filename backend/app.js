const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const Post =  require('./models/post');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://numair:vrCMc28vuA0hvgOv@cluster0-jsdlp.mongodb.net/test?retryWrites=true&w=majority")
    .then( () => {
        console.log("connected!!!");
    })
    .catch( () => {
        console.log("connection failed!!!");
    });


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");

    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post(req.body);
    console.log( post);
    post.save();
    res.status(201).json({
       message: "success"
    });
    next();
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: "asdsd",
            title: "vvvvv",
            content: "adsadsad"
        },
        {
            id: "asdsd",
            title: "vvvvv",
            content: "adsadsad"
        }
    ];
    res.json(posts);
    res.status(200).json({
        posts: posts
    });
});


module.exports = app;