import React from 'react'
import { Container,Grid,Grow,Typography } from '@material-ui/core';


function Publication(){
    return(
        <Container>
          <Grow in ></Grow>
          <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item  xs={12} sm={7}>
              <Posts/>
              </Grid>
              <Grid item  xs={12} sm={4}>
               <Form/>
                  </Grid>
              </Grid>
          </Container>
        </Container>
    )
}

export default Publication;