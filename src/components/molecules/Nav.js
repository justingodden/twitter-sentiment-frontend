import React, { useState, useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { TweetContext } from '../../context/TweetContext';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Nav() {
    const classes = useStyles();
    const [tweet, setTweet] = useContext(TweetContext)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState({})

    async function onSubmit (e) {
        e.preventDefault()
        setLoading(true)
        await axios.post('https://sentient-twitter.herokuapp.com/', search).
            then(res => res.data)
            .then((data) => {
                setLoading(false)
                setTweet(data)
            })
            .catch(err => {
                alert("Something went wrong...")
                setLoading(false)
                })
            }

    return (
        <>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress/>
            </Backdrop>
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
        </>
    )
}

export default Nav
