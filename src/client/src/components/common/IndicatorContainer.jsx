import React from 'react';
import Grid from '@material-ui/core/Grid';
import Indicator from './Indicator';

const IndicatorContainer = ({indicators}) =>{
  let content = [];
  indicators.map(indicator =>{
    content.push(<Indicator indicator = {indicator} key = {indicator._id}/>);
  });
  
  return ( 
    <Grid container alignItems = 'center' justify = 'center'>
      {content}
    </Grid>
  );
}

export default IndicatorContainer;

