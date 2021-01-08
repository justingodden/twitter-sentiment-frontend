import { React, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'

function Nav() {

    const [search, setSearch] = useState({})
    const [data, setData] = useState({})

    async function onSubmit (e) {
        e.preventDefault()
        await axios.post('http://127.0.0.1:5000/', search).
            then(res => {
                setData(res)
                console.log(data)
            }).
                catch(err => {
                alert("Please enter correct details")
                })
            }

    return (
        <div className="navBar">
            <div className="navBar__left">
                <img className="navLogo" src={require('../../images/logo.svg').default} alt=''/>
                <h2>Sentient</h2>
            </div>
            <div className="navBar__right">
                <form className="searchContainer" onSubmit={onSubmit}>
                    <FaSearch className="searchIcon" />
                    <input
                        className="searchBar"
                        type="search"
                        placeholder="Search..."
                        onChange={e => setSearch({search: e.target.value})}
                        
                    />
                </form>
            </div>
                
        </div>
    )
}

export default Nav
