import React from 'react'
import TopDashboard from '../molecules/TopDashboard'
import MiddleDashboard from '../molecules/MiddleDashboard'
import BottomDashboard from '../molecules/BottomDashboard'

function Dashboard() {
    return (

        <div className="dashboard">
            <div className="dashboardHeader">
                <h2>Dashboard</h2>
                <h5>The past week's breakdown of your search-term</h5>
            </div>
            <TopDashboard />
            <MiddleDashboard />
            <BottomDashboard />
        </div>

    )
}

export default Dashboard
