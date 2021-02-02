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
                    <h1 className="Largeststock__part__right__h1">Largest stock broker in India</h1>
                    <p className="Largeststock__part__right__p">4+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="ul__container">
                    <ul  className="Largeststock__part__right__ul">
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    <ul className="Largeststock__part__right__ul">
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                    </div>
                    <div className="">
                        <img src="https://zerodha.com/static/images/press-logos.png" alt=""/>
                    </div>
                </div>
               
            </div>
            <div className="Zeroidha_univ">
                <h1>The Zerodha Universe</h1>
                <p>A whole ecosystem of modern investment apps <br/> tailored to specific needs, built from the ground up</p>
                <img src="https://zerodha.com/static/images/ecosystem.png" alt=""/>
            </div>
           
        </div>
    )
}

export default Homepage