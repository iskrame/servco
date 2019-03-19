import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import WrappedVirtualizedTable from '../common/WrappedVirtualizedTable';
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class VirtualizedTable extends Component {
  _isMounted = false;
  state = {
    data: [],
  };

  componentDidMount(){
    this._isMounted = true;
    this.setState({
      data: this.props.gridData
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
 }
  
  render(){   

    
    let id = 0;
    function createData(day, punches) {
      id += 1;
      return { id, day, punches };
    }
    
    const rows = [];
    
     this.state.data.map((element) => {
      rows.push(createData(element.day,element.punches))
    });

    return (
      <Paper style={{ height: 400, width: '100%' }}>
        <WrappedVirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          onRowClick={event => console.log(event)}
          columns={[
            {
              flexGrow: 1.0,
              width: 150,
              label: 'Day',
              dataKey: 'day',
            },
            {
              flexGrow: 1.0,
              width: 150,
              label: 'Punches',
              dataKey: 'punches',
            },
          ]}
        />
      </Paper>
    );
  }
}

export default VirtualizedTable;