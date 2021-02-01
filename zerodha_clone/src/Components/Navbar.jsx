import React from 'react'
import './Navbar.css'

class NavBar extends React.Component{
    render(){
        return(
            <nav className="Navbar-Items">
                <h1 className="Navbar-logo"></h1>
                <div className="menu-icon"></div>
            </nav>
        )
    }

}

export default NavBar