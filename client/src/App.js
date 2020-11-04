import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './Images/memories.png'
import useStyle from './style';

const App = () => {
    const classes = useStyle();
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