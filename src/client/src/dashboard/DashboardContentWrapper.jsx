import React from 'react';
import axios from 'axios'; 
import Typography from '@material-ui/core/Typography';
import VirtualizedTable from '../components/common/VirtualizedTable';
import IndicatorContainer from '../components/common/IndicatorContainer';

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
          <br/>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
          <VirtualizedTable gridData = {this.state.gridData}/>
        </div>
      )
    }

    return content;
  }
}