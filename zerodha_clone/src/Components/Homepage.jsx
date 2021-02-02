import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
const Homepage = ()=>{
    return(
        <div className="container">
            <Navbar/>
           <div className="banner">
            <div className="container__no1broker" >
                    <img className="Banner__No1Broker" src="https://zerodha.com/static/images/landing.png" alt="invest in everything image"></img>
                </div>
                <h1 className="heading__NO1Broker">Invest in everything</h1>
                <p className="p__NO1Broker">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="button__NO1Broker">Sign up Now</button>
           </div>
            <div className="Largeststock__part">
                <div className="Largeststock__part__left">
                        <img src="https://zerodha.com/static/images/largest-broker.svg" alt=""/>
                </div>

                <div className="Largeststock__part__right">

                </div>
               
            </div>
            <img src="https://zerodha.com/static/images/ecosystem.png" alt=""/>
        </div>
    )
}

export default Homepage