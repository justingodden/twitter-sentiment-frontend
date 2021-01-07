import React from 'react'
import Nav from '../components/molecules/Nav'
import Toolbar from '../components/molecules/Toolbar'
import Dashboard from '../components/molecules/Dashboard'

function ContentBody() {
    return (
        <div className="contentBody">
            <Nav />
            <div className="mainContent">
                <Toolbar />
                <Dashboard />
            </div>
        </div>
    )
}

export default ContentBody
