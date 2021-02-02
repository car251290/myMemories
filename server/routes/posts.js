import express from 'express';

import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';

import {getPosts,createPost,updatePost} from '../controllers/posts.js';

const router = express.Router();


// for the back end and for the concept CRUD
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost)

router.delete('/:id',deletePost)
router.patch('./:id/likePost',likePost)

export default router;


export default router;

