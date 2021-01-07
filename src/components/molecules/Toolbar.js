import React from 'react'
import { FaChartBar, FaAngleDoubleRight } from "react-icons/fa";

const items = ['bar-chart']

function Toolbar() {
    return (
        <div className="toolbar" >
            <div className="toolbarItem">
                <FaChartBar className="toolbarItem__icon"/>
                <h3 className="toolbarItem__text">Dashboard</h3>
            </div>
            <div className="toolbarItem">
                <FaAngleDoubleRight className="toolbarItem__icon"/>
                <h3 className="toolbarItem__text">These</h3>
            </div>
            <div className="toolbarItem">
                <FaAngleDoubleRight className="toolbarItem__icon"/>
                <h3 className="toolbarItem__text">don't</h3>
            </div>
            <div className="toolbarItem">
                <FaAngleDoubleRight className="toolbarItem__icon"/>
                <h3 className="toolbarItem__text">do</h3>
            </div>
            <div className="toolbarItem">
                <FaAngleDoubleRight className="toolbarItem__icon"/>
                <h3 className="toolbarItem__text">anything</h3>
            </div>
            <div className="toolbarItem">
                <FaAngleDoubleRight className="toolbarItem__icon"/>
                <h3 className="toolbarItem__text">yet!</h3>
            </div>
            
        </div>
    )
}

export default Toolbar