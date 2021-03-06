import React from 'react';
import axios from 'axios'; 
import VirtualizedTable from '../components/common/VirtualizedTable';
import IndicatorContainer from '../components/common/IndicatorContainer';
import GraphicChart from '../components/common/GraphicChart';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    marginTop: -60,
    marginLeft: -60
  }
};

export class DashboardContentWrapper extends React.Component{
  state = {
    contentLoaded: false,
    indicators: [],
    gridData: [],
    chartData: {}
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
        gridData: res.data.GridData,
        chartData: res.data.ChartData
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
    console.log(this.state.chartData);
    console.log(this.props.leng)
    let content = <div><CircularProgress size={120} style = {styles.loadingSpinner}/></div>;
    if(this.state.contentLoaded){
      content = (
        <div>
          <IndicatorContainer indicators = {this.state.indicators}  />
          <GraphicChart leng={this.props.leng} ChartData={this.state.chartData}/>
          <br/>
          <VirtualizedTable gridData = {this.state.gridData} leng={this.props.leng}/>
        </div>
      )
    }

    return content;
  }
}