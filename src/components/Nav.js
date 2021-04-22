import { React } from 'react';
import classes from './Nav.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
function Nav() {
    return(
        <div className={classes.Nav}>
            <h1><span><FaInstagram /></span>    Instagram</h1>
            <div className={classes.NavInput}><span><FaSistrix size='20px'/><input placeholder='Search'></input></span></div>
        </div>
    )
}

export default Nav;