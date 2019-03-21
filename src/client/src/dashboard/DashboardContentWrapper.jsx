import React from 'react';
import axios from 'axios'; 
import VirtualizedTable from '../components/common/VirtualizedTable';
import IndicatorContainer from '../components/common/IndicatorContainer';
import GraphicChart from '../components/common/GraphicChart';

export class DashboardContentWrapper extends React.Component{
  state = {
    contentLoaded: false,
    indicators: [],
    gridData: []
  }

  componentDidMount = () =>{
    axios({
      url: "/api/dashboard",
      method: "post",
      data: {
        idZkTeco: "109799"
      }
    })
    .then(res => {
      this.setState({
        indicators: res.data.DashboardIndicators,
        gridData: res.data.GridData
      });
    })
    .catch(err =>{
      console.log(err);
    })
    .then(()=>{
      this.setState({
        contentLoaded: true
      })
    });
  }

  render(){

    let content = <div></div>;
    if(this.state.contentLoaded){
      content = (
        <div>
          <IndicatorContainer indicators = {this.state.indicators}  />
          <GraphicChart/>
          <br/>
          <VirtualizedTable gridData = {this.state.gridData}/>
        </div>
      )
    }

    return content;
  }
}