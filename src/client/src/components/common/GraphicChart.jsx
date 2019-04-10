import React from "react";
import { Line } from "react-chartjs-2";
import {clientLenguaje} from "../../translate/clientTranslate";

class GraphicChart extends React.Component {
  initialLeng = clientLenguaje(this.props.leng);
  
  state = {
    style: {
        background: "#fff", 
        boxShadow: '3px 3px 5px 3px rgba(0,0,0,.2)', 
        borderRadius:'5px', padding: "20px",
        position: "relative"
    },
    dataLine: {
      labels: this.props.ChartData.actualData.labels,
      datasets: [
        {
            label: this.initialLeng.currentPeriod + " (" + this.props.ChartData.actualData.start + " - " + this.props.ChartData.actualData.end + ") " + this.props.ChartData.actualData.totalHours + "/45",
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
            data: this.props.ChartData.actualData.hours
        },
        {
            label: this.initialLeng.previousPeriod + " (" + this.props.ChartData.previousData.start + " - " + this.props.ChartData.previousData.end + ") " + this.props.ChartData.previousData.totalHours + "/45",
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
            data: this.props.ChartData.previousData.hours
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
                    labelString: this.initialLeng.hours
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: this.initialLeng.day + "s"
                },
                gridLines: {
                    display:true
                }
            }]
        },
    }
  }
  componentWillReceiveProps(nextProps) {
    let leng = clientLenguaje(nextProps.leng);
    
    this.setState({
      dataLine: {
        datasets: [
          {
              label: leng.currentPeriod + " (" + this.props.ChartData.actualData.start + " - " + this.props.ChartData.actualData.end + ") " + this.props.ChartData.actualData.totalHours + "/45",
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
              data: this.props.ChartData.actualData.hours
          },
          {
              label: leng.previousPeriod + " (" + this.props.ChartData.previousData.start + " - " + this.props.ChartData.previousData.end + ") " + this.props.ChartData.previousData.totalHours + "/45",
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
              data: this.props.ChartData.previousData.hours
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
                    labelString: leng.hours
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: leng.day + "s"
                },
                gridLines: {
                    display:true
                }
            }]
        },
      }
    })
  }

render() {
    return (
        <div style={this.state.style}>
            <Line height={70} data={this.state.dataLine} options={this.state.options } />
        </div>
    );
  }
}

export default (GraphicChart);