import React from 'react'
import { Link } from 'react-router-dom'
import YelpLogo from './images/yelpington.svg'

function NavBar(props){
    return(
        <header id='nav-header'>
             <img id='yelp-logo' src={YelpLogo} alt="yelpington logo"/>
            <Link to='/' className="nav-link">Yelpington</Link>
        </header>
    )
}
export default NavBar