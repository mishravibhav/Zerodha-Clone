import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
const Homepage = ()=>{
    return(
        <div className="container">
            <Navbar/>
            <div className="container__no1broker" >
                <img className="Banner__No1Broker" src="https://zerodha.com/static/images/landing.png" alt="invest in everything image"></img>
                
            </div>
            <h1>Invest in everything</h1>
        </div>
    )
}

export default Homepage