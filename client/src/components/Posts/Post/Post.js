import React from 'react';
import useStyle from './style';
const Post =()=> {
    const classes = useStyle();
    return(
        <hi className={classes.something}>Posts</hi>
    );
}

export default Post;