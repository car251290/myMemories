import express from 'express';
<<<<<<< HEAD
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
=======
import {getPosts,createPost,updatePost} from '../controllers/posts.js';
>>>>>>> 8c2482ea4ffa89bd240e81d92beb0f308174aea3
const router = express.Router();


// for the back end and for the concept CRUD
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost)
<<<<<<< HEAD
router.delete('/:id',deletePost)
router.patch('./:id/likePost',likePost)

export default router;
=======

export default router;
>>>>>>> 8c2482ea4ffa89bd240e81d92beb0f308174aea3
