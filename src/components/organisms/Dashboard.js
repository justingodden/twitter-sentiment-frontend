import React from 'react'
import TopDashboard from '../molecules/TopDashboard'
import MiddleDashboard from '../molecules/MiddleDashboard'
import BottomDashboard from '../molecules/BottomDashboard'

function Dashboard() {
    return (
        <div className="dashboard">
            <TopDashboard />
            <MiddleDashboard />
            <BottomDashboard />
        </div>
    )
}

export default Dashboard
