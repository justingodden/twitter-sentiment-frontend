import React from 'react'
import ToolbarItem from '../atoms/ToolbarItem'

const items = [1,2,3,4,5]

function Toolbar() {
    return (
        <div className="toolbar" >
            {
                items.map(item => (
                    <ToolbarItem text={item} src={require('../../images/logo.svg').default}/>
                ))
            }
        </div>
    )
}

export default Toolbar
