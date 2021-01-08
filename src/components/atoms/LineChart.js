import React from 'react'
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      fill: 'start',
      lineTension: 0.2,
      backgroundColor: 'rgba(255, 46, 245, .1)',
      borderColor: 'rgba(255, 46, 245, 1)',
      borderWidth:1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 46, 245, 1)',
      pointBackgroundColor: 'rgba(255, 46, 245, 1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 46, 245, 1)',
      pointHoverBorderColor: 'rgba(255, 46, 245, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function LineChart() {
    return (
        <>
            <Line className="lineChart"
            redraw={true}
                data={data} options={{
                    responsive:true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "% Positive or Neutral tweets per day"
                    },
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </>
    )
}

export default LineChart
