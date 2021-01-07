import React from 'react'

function ToolbarItem({ text, src }) {
    return (
        <div className="toolbarItem">
            <img className="toolbarItem__icon" src={src} />
            <h3 className="toolbarItem__text" >Item {text}</h3>
        </div>
    )
}

export default ToolbarItem
