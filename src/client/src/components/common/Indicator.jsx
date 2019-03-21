import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


const Indicator = ({indicator}) => {
  return(
    <Grid item xs = {12} sm = {6} md = {6} lg = {3} >
      <Paper>
        <Grid container>
          <Grid item xs = {3} 
            style = {{
              backgroundColor: indicator.backgroundColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'              
            }}
          >
            <Icon>{indicator.logo}</Icon>

          </Grid>
          <Grid item xs = {9} style = {{
            fontSize: '.8rem'
          }}>
            <p><b>{indicator.title}</b></p>
            {indicator.value}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Indicator;