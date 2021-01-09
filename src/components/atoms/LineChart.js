import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2';
import { TweetContext } from '../../context/TweetContext';


function LineChart() {
    const [{ line: { dates, pos_tweets_per_day }}, setTweet] = useContext(TweetContext)

    const data = {
        labels: dates,
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
            data: pos_tweets_per_day
            }
        ]
        };


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
