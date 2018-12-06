import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = () => {

    // added redirect to Home page after 2000 ms 
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);    

    return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <Link className="brand-logo" to="/">Poke'Times</Link>
            <ul className="right">
                <li><Link to='/'>Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}

// by adding withRouter in the class we make it higher order component to access props without the route component
export default withRouter(Navbar)