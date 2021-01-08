import React from 'react'
import LineChart from '../atoms/LineChart'
import BarChart from '../atoms/BarChart'
import { chartExample1 } from "../atoms/TestOptions";
import { Line } from 'react-chartjs-2';

function MiddleDashboard() {
    return (
        <div className="middleDashboard">
            <div className="middleDashboard__itemLeft">
                <LineChart />
                {/* <Line
                    data={chartExample1["data1"]}
                    options={chartExample1.options}
                  /> */}
                {/* <div className="temp"></div> */}
            </div>
            <div className="middleDashboard__itemRight">
                <BarChart />
                {/* <div className="temp"></div> */}
            </div>
        </div>
    )
}

export default MiddleDashboard
