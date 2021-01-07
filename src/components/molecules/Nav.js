import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Nav() {
    const classes = useStyles();
    return (
        <div className="navBar">
            <div className="navBar__left">
                <img className="navLogo" src={require('../../images/logo.svg').default} />
                <h2>Sentient</h2>
            </div>
            <div className="navBar__right">
                <form className="searchContainer">
                    <span className="searchIcon"><i class="fa fa-search"></i></span>
                    <input className="searchBar" type="search" placeholder="Search..." />
                </form>
            </div>
                
        </div>
    )
}

export default Nav
