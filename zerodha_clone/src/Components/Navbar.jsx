import React from 'react'
import './Navbar.css'
import Menuitems from "../menuitems.json"

class NavBar extends React.Component{
    state = {clicked:false}

    handleclick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="Navbar-Items">
                    <img className="Navbar-logo" src="https://zerodha.com/static/images/logo.svg" alt="Zorodha-logo"/>
                
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
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