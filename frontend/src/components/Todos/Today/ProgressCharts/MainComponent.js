import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
  
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    var fontSize = (height / 140).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "hanging";

    var text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

const chartData = (props) => {
  var completedTodosLength = props.completedTodos.length;
  var overdueTodosLength = props.overdueTodos.length;
  var uncompletedTodosLength = props.uncompletedTodos.length;
  var percentcompeltedTodos = Math.round((completedTodosLength / (completedTodosLength + overdueTodosLength + uncompletedTodosLength)) * 100);

  return {
    labels: ['Completed', 'Overdue', 'Uncompleted'],
    text: percentcompeltedTodos + "%",
    datasets: [
      {
        fill: false,
        pointRadius: 1,
        data: [completedTodosLength, overdueTodosLength, uncompletedTodosLength],
        backgroundColor: [
          '#6fbbd3',
          '#b33e5c',
          'rgba(211, 211, 211)'
        ],
      }
    ],
  };
};

const options = {
  maintainAspectRatio: false,
  responsive: false,
};

export default class Example extends React.Component {

  render() {
    return (
      <div>
        <span style={{fontWeight: "bold", "fontSize": 25}}>Progress Chart</span>
        <div style={{marginLeft: 80, marginBottom: 20}}>
          <Doughnut
            data={chartData(this.props)}
            options={options}
            width={240}
            height={240}
          />
        </div>
      </div>
    );
  }
}


