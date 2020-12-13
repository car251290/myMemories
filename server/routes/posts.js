import express from 'express';
import {getPosts,createPost,updatePost} from '../controllers/posts.js';
const router = express.Router();


// for the back end and for the concept CRUD
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost)

export default router;
