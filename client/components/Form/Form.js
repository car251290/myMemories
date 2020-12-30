import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (currentId) {
        dispatch(createPost(currentId,postData));
        
      } else {
        dispatch(updatePost(postData));
      }

      clear();

    };

    const clear = () => {
      setCurrentId(null);
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };


    return (
         <Paper className = { classes.paper } >
        <form autoComplete = 'off'
        noValidate className = { `${classes.root} ${classes.form}`}
        onSubmit = { handleSubmit }>
           <Typography variant="h6">{currentId ? `Editing` : 'Creating'}a memory</Typography>
        <TextField name = "creator" variant = "outlined" label = "Creator"fullWidth value = { postData.creator }onChange = {(e) => setPostData({ ...postData,creator: e.target.value })}/>
          <TextField name = "title" variant = "outlined" label = "tile"fullWidth value = { postData.title }onChange = {(e) => setPostData({ ...postData,title: e.target.value })}/>
         
         <TextField name = "message" variant = "outlined" label = "message"fullWidth value = { postData.message }onChange = {(e) => setPostData({ ...postData,messager: e.target.value })}/>
         <TextField name = "tags" variant = "outlined" label = "tags"fullWidth value = { postData.tags }onChange = {(e) => setPostData({ ...postData,tags: e.target.value.split(',')})}/>   
         <div className={classes.fileInput}>
             <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selectedFile:base64})}>
             </FileBase>
         </div>
         <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
         <Button variant="contain" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>
        </form > 
        </Paper>

        
    );
}

export default Form;