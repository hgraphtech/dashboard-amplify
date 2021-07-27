import React from 'react';
import { Line } from 'react-chartjs-2';


class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {dates: [], prices: []};
    }

    componentDidMount() {
        this.setState({dates: [], prices: []});
    }
  
    render() {
      const cdata = {
        labels: this.state.dates,
        datasets: [
          {
            data: this.state.prices,
            pointRadius: 0,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 2,
            pointBackgroundColor: '#007bff'
          },
        ],
      };
      
      const options = {
        plugins:{
          legend: {
            display: false,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      const component = (
          <div className="col">
            <div className="card">
              <div className="card-header">
                Price Chart
              </div>
              <div className="card-body">
                <Line data={cdata} options={options} />
              </div>
            </div>
          </div>
      );

      return component;
    }
  }



export default Chart;