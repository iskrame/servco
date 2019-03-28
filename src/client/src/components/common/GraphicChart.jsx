import React from "react";
import axios from 'axios'; 
import { Line } from "react-chartjs-2";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -40,
    marginLeft: -40
  }
});

class GraphicChart extends React.Component {

  state = {
    style: {
        background: "#fff", 
        boxShadow: '3px 3px 5px 3px rgba(0,0,0,.2)', 
        borderRadius:'5px', padding: "20px",
        position: "relative"
    },
    dataLine: {
        labels: ["dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm","dd/mm"],
        datasets: [
          {
              label: "Periodo Actual (--/--/-- - --/--/--) 0/45",
              data: []
          },
          {
              label: "Periodo Anterior (--/--/-- - --/--/--) 0/45",
              data: []
          }
        ]
      },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Horas'
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Dias'
                },
                gridLines: {
                    display:true
                }
            }]
        },
    },
    loading: true
  }

  componentDidMount = () =>{
    axios({
      url: "/api/dashboard/timechart",
      method: "post",
      data: {
        idZkTeco: "109799"
      }
    })
    .then(res => {
      this.setState({
        dataLine: {
            labels: res.data.ChartData.actualData.labels,
            datasets: [
              {
                  label: "Periodo Actual (" + res.data.ChartData.actualData.start + " - " + res.data.ChartData.actualData.end + ") " + res.data.ChartData.actualData.totalHours + "/45",
                  steppedLine: false,
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: res.data.ChartData.actualData.hours
              },
              {
                  label: "Periodo Anterior (" + res.data.ChartData.previousData.start + " - " + res.data.ChartData.previousData.end + ") " + res.data.ChartData.previousData.totalHours + "/45",
                  steppedLine: false,
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgb(216, 27, 96,0.4)",
                  borderColor: "rgb(216, 27, 96,0.4)",
                  borderCapStyle: "butt",
                  borderDash: [5,5],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgb(216, 27, 96,0.4)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgb(216, 27, 96,0.4)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: res.data.ChartData.previousData.hours
                }
            ]
          }
      });
    })
    .catch(err =>{
      console.log(err);
    })
    .then(()=>{
      this.setState({
        loading: false
      })
    });
  }

render() {
    const { classes } = this.props;
    return (
        <div style={this.state.style}>
            <Line height={70} data={this.state.dataLine} options={this.state.options } />
            {this.state.loading && <CircularProgress size={80} className={classes.loadingSpinner}/>}
        </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GraphicChart);