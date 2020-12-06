import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyle from './styles';
import FileBase from "react-file-base64"
import {useDispatch} from 'react-redux'

import {createPost} from '../../actions/posts'

const Form = () => {
    const [postData, setPostData] = useState({creator: '',title: '',message: '',tags: '',selectedFile: ''
    
    });
    const classes = useStyle();
     const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    return (
         <Paper className = { classes.paper } >
        <form autoComplete = 'off'
        noValidate className = { `${classes.root} ${classes.form}`}
        onSubmit = { handleSubmit } >
            <Typography  variant = "h6" >
            Creating a great Memory
            </Typography>
        <TextField name = "creator" variant = "outlined" label = "Creator"fullWidth value = { postData.creator }onChange = {(e) => setPostData({ ...postData,creator: e.target.value })}/>
          <TextField name = "title" variant = "outlined" label = "tile"fullWidth value = { postData.title }onChange = {(e) => setPostData({ ...postData,title: e.target.value })}/>
         <TextField name = "message" variant = "outlined" label = "message"fullWidth value = { postData.message }onChange = {(e) => setPostData({ ...postData,messager: e.target.value })}/>
         <TextField name = "tags" variant = "outlined" label = "tags"fullWidth value = { postData.tags }onChange = {(e) => setPostData({ ...postData,tags: e.target.value })}/>   
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