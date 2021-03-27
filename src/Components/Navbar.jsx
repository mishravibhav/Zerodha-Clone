import React from 'react'
import './Navbar.css'
import Menuitems from "../menuitems.json"
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    state = {clicked:false}

    handleclick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="Navbar-Items">
                    <Link to='/'><img className="Navbar-logo" src="https://zerodha.com/static/images/logo.svg" alt="Zorodha-logo"/></Link>
                
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li ><Link to={item.to} key={index} className={item.cName}>{item.title}</Link></li>
                        )
                    })}
                    
                </ul>

                <div className="menu-icon" onClick={this.handleclick}>
                    <li className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></li>
                </div>
            </nav>
        )
    }

}

export default NavBar