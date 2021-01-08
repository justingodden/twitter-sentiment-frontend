import React from 'react'
import { FaSearch } from "react-icons/fa";

function Nav() {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <img className="navLogo" src={require('../../images/logo.svg').default} alt=''/>
                <h2>Sentient</h2>
            </div>
            <div className="navBar__right">
                <form className="searchContainer">
                    <FaSearch className="searchIcon" />
                    <input className="searchBar" type="search" placeholder="Search..." />
                </form>
            </div>
                
        </div>
    )
}

export default Nav
