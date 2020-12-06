import React from 'react';
import { useSelector } from 'react-redux';
import Post from "./Post/Post"
import useStyle from './style';


const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyle();
    console.log(posts);
    return ( <
        >
        <
        hi className = { classes.something } > Posts < /hi> <
        Post / >
        <
        Post / >
        <
        />
    );
}

export default Posts;