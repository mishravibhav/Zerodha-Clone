import React from 'react'
import './Navbar.css'
import Menuitems from "../menuitems.json"

class NavBar extends React.Component{
    render(){
        return(
            <nav className="Navbar-Items">
                    <img className="Navbar-logo" src="https://zerodha.com/static/images/logo.svg" alt="Zorodha-logo"/>
                
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }

}

export default NavBar