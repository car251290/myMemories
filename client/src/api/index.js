import axios from 'axios';

const url = 'http://localhost:5000/posts';
//for get the api and fectch the post from axios.
export const fetchPosts = () => axios.get(url);
//for get the api and create the post.
export const createPost = (newPost) => axios.post(url,newPost)
//for get the api and update the post.
export const updatePost= (id, updatePost) => axios.patch(`${url}/${id}`,updatePost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);


