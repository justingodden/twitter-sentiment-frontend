import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import { TweetContext } from '../../context/TweetContext';


function BarChart() {
    const [{ bar: { dates, tweets_per_day }}, setTweet] = useContext(TweetContext)

    const data = {
        labels: dates,
        datasets: [
            {
            label: 'My First dataset',
            //   backgroundColor: 'rgba(255,99,132,0.2)',
            //   borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 46, 245, 0.2)',
            hoverBorderColor: 'rgba(255, 46, 245, 1)',
            data: tweets_per_day,
            backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
            }
        ]
        };

    return (
        <>
            <Bar className="barChart"
                data={data}
                // width={100}
                // height={200}
                options={{
                    responsive:true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Tweets per day"
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

export default BarChart
