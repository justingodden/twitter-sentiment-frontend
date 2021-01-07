import React from 'react'

function TopDashboard() {
    return (
        <div className="topDashboard">
            <div className="topDashboard__item">
                <h3 className="topDashboard__itemText">Total</h3>
                <h2 style={{color:'rgba(255, 46, 245, 1)'}}>456</h2>
            </div>
            <div className="topDashboard__item">
                <h3 className="topDashboard__itemText">Positive</h3>
                <h2 style={{color:'rgba(75, 192, 192, 1)'}}>456</h2>
            </div>
            <div className="topDashboard__item">
                <h3 className="topDashboard__itemText">Negative</h3>
                <h2 style={{color:'rgba(153, 102, 255, 1)'}}>456</h2>
            </div>
            <div className="topDashboard__item">
                <h3 className="topDashboard__itemText">Neutral</h3>
                <h2 style={{color:'rgba(54, 162, 235, 1)'}}>456</h2>
            </div>
        </div>
    )
}

export default TopDashboard
