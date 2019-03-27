import React from "react";
import { Line } from "react-chartjs-2";


class GraphicChart extends React.Component {

  state = {
    style: {
        background: "#fff", 
        boxShadow: '3px 3px 5px 3px rgba(0,0,0,.2)', 
        borderRadius:'5px', padding: "20px",
        position: "relative"
    },
    dataLine: {
      labels: this.props.chartData.actualData.labels,
      datasets: [
        {
            label: "Periodo Actual (" + this.props.chartData.actualData.start + " - " + this.props.chartData.actualData.end + ") " + this.props.chartData.actualData.totalHours + "/45",
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
            data: this.props.chartData.actualData.hours
        },
        {
            label: "Periodo Anterior (" + this.props.chartData.previousData.start + " - " + this.props.chartData.previousData.end + ") " + this.props.chartData.previousData.totalHours + "/45",
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
            data: this.props.chartData.previousData.hours
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
    }
  }

render() {
    return (
        <div style={this.state.style}>
            <Line height={70} data={this.state.dataLine} options={this.state.options } />
        </div>
    );
  }
}

export default GraphicChart;