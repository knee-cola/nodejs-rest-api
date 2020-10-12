const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const Post = require('../model/Post');

// GET ALL POSTS
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

// ADD NEW POST
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

// GET A SPECIFIC POST (byId)
router.get('/:postId', async (req, resp) => {
    try {
        const posts = await Post.find({_id: req.params.postId});
        resp.status(200).json(posts);
    } catch (ex) {
        resp.status(500).json({
            ex
        });
    }
});

// DELETE A SPECIFIC POST (byId)
router.delete('/:postId', async (req, resp) => {
    try {
        const deleteResult = await Post.deleteOne({_id: req.params.postId});
        resp.status(200).json(deleteResult);
    } catch (ex) {
        resp.status(500).json({
            ex
        });
    }
});

module.exports = router;
