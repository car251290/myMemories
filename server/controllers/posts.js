import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req,res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);

    } catch (error){
        res.status(404).json({message:error.message})

    }
}

export const createPosts=(req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)


    }catch(error){
        res.status(409).json({message:error.message});


    }
}

export const createPost =(req,res)=> {
    res.send('Post Creation');
}


export const updatePost = async(req,res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send(`no post with that return id`)
   
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {new:true});
    res.json(updatedPost);

}


export const deletePost = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).send(`no post with that return id`)

    await PostMessage.findByIdAndRemove(id);
    console.log( 'DELETE')

    res.json({message: `post deleted successfully`});


}

export const likePost = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).send(`no post with that return id`)
    const post = await  PostMessage.findById(id);

    const updatePost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new : true})
    
    res.json(updatePost);

}
