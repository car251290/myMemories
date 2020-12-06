import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './Images/memories.png'
import useStyle from './style';

const App = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

  useEffect( () => {
      //the dispatch of the call for be postesd
      dispatch(getPosts());


  },[dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography classes={classes.heading}variant="h2" align="center">Memories</Typography>
                <img classes={classes.image}src={memories} alt="memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>

        </Container>
    )
}

export default App;