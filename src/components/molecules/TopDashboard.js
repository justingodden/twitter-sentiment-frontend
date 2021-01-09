import React, { useContext } from 'react'
import { TweetContext } from '../../context/TweetContext';


function TopDashboard() {
    const [{ totals: { total, total_pos, total_neg, total_neu}}, setTweet] = useContext(TweetContext)

    return (
        <div className="topDashboard">
            <div className="topDashboard__item">
                <h4 className="topDashboard__itemText">Total</h4>
                <h2 style={{color:'rgba(255, 46, 245, 1)'}}>{total}</h2>
            </div>
            <div className="topDashboard__item">
                <h4 className="topDashboard__itemText">Positive</h4>
                <h2 style={{color:'rgba(75, 192, 192, 1)'}}>{total_pos}</h2>
            </div>
            <div className="topDashboard__item">
                <h4 className="topDashboard__itemText">Negative</h4>
                <h2 style={{color:'rgba(153, 102, 255, 1)'}}>{total_neg}</h2>
            </div>
            <div className="topDashboard__item">
                <h4 className="topDashboard__itemText">Neutral</h4>
                <h2 style={{color:'rgba(54, 162, 235, 1)'}}>{total_neu}</h2>
            </div>
        </div>
    )
}

export default TopDashboard
