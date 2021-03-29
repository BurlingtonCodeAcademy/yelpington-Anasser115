import React from 'react'
import { Link } from 'react-router-dom'
import YelpLogo from './images/yelpington.svg'

function NavBar(props){
    return(
        // header container
        <header id='nav-header'>
            {/* logo */}
             <img id='yelp-logo' src={YelpLogo} alt="yelpington logo"/>
             {/* title that link to the home page */}
            <Link to='/' className="nav-link">Yelpington</Link>
        </header>
    )
}
export default NavBar