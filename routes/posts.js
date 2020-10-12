const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (res,resp) => {
    try {
        const posts = await Post.find();
        resp.status(200).json(posts);
    } catch (ex) {
        resp.status(500).json({
            ex
        });
    }
});

router.post('/', async (req,resp) => {
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();
    
        resp.status(200).json(savedPost);
    } catch (ex) {
        resp.status(500).json({
            ex
        });
    }
});

module.exports = router;
