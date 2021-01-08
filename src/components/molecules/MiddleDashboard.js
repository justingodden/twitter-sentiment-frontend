import React from 'react'
import LineChart from '../atoms/LineChart'
import BarChart from '../atoms/BarChart'

function MiddleDashboard() {
    return (
        <div className="middleDashboard">
            <div className="middleDashboard__itemLeft">
                <LineChart />
            </div>
            <div className="middleDashboard__itemRight">
                <BarChart />
            </div>
        </div>
    )
}

export default MiddleDashboard
