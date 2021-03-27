import React from 'react'
import './Homepage.css'
import Footer from './Footer'
import {Link} from 'react-router-dom'

 const Homepage = ()=>{
    return(
        <div className="container">
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
                        <img src="https://zerodha.com/static/images/press-logos.png" alt="press_logo"/>
                    </div>
                </div>
               
            </div>
            <div className="Zeroidha_univ">
                <h1>The Zerodha Universe</h1>
                <p>A whole ecosystem of modern investment apps</p>
                <p> tailored to specific needs, built from the ground up</p>
                <img style={{marginTop:"25px"}} src="https://zerodha.com/static/images/ecosystem.png" alt=""/>
                <p><Link  className="Links" to="https://zerodha.com/products">Explore our products <i class="fas fa-arrow-right"></i></Link></p>
            </div>

            <div className="Unbeatable__pricing__container">
                <div className="Unbeatable__pricing__left">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <p><Link to="/"  className="Links">See pricing <i class="fas fa-arrow-right"></i></Link></p>
                </div>
                <div className="Unbeatable__pricing__right">
                    <div className="box">
                        <h1>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="box">
                        <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>

            <div className="versity__container">
                <div className="versity__container__left">
                    <img src="https://zerodha.com/static/images/index-education.svg" alt=""/>
                </div>
                <div className="versity__container__right">
                    <h4>Free and open market education</h4>
                    <p>Versity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p><Link to="/" className="Links">Varsity <i class="fas fa-arrow-right"></i></Link></p>

                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p><Link to="" className="Links">TradingQ&A <i class="fas fa-arrow-right"></i> </Link></p>
              </div>
            </div>

            <div className="openAccount">
                <h1>Open a Zerodha Account</h1>
                <p>Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades</p>
                <button>Sign up now</button>
            </div>
        </div>
    )
}

export default Homepage