import React from 'react';
import useStyle from './style';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/core/icons/ThumbUpAlt';
import DeleteIcon from "@material-ui/core/icons/Delete";
import MoreHorizIcon from '@material-ui/core/icons/MoreHoriz';
import moment from 'moment';

const Post =({post,setCurrentId})=> {
    const classes = useStyle();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
                <div className={classes.overlay}>
             <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

                </div>
                <div className={classes.overlay2}>
                    <Button style={{color:'white'}} size="small" onClick={()=> setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default"/>
                    </Button>

                </div>

                <div className={classes.details}>
              <Typography variant="body2" color="textSecondary">{post.tag.map(tag=>`#${tag} `)}</Typography>
                </div>
                <CardContent>
                    <Typography className={classes.title} variat="h5" gutterBottom>{post.message}
                </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color='primary' onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like
                        {post.likeCount}
                       

                    </Button>
                    <Button size="small" color='primary' onClick={()=>{}}>
                        <DeleteIcon fontSize="small" />
                        Delate
                    </Button>

                    
                </CardActions>
            </CardMedia>


        </Card>
    );
}

export default Post;