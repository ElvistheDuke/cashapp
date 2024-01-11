import React from 'react'
import Navbar from './Navbar'
import herophone from "../assets/herophone.png"
import herocube from "../assets/herocube.png"
import herostairs from "../assets/herostairs.png"
import herostairscube from "../assets/herostairscube.png"
import heropillar from "../assets/heropillar.png"
import Footer from './Footer'


const HeroSection = () => {
  return (
    <div className='heroSection'>
        <div className="heroContainer">
            <Navbar />
            <div className="heroText">
                <p>CASH</p>
                <img id='herophone' src={herophone} alt="mobile phone" />
                <p id='apptext'>APP</p>
            </div>
            <img id='herocube' src={herocube} alt="cube" />
            <img id='herostairs' src={herostairs} alt="cube" />
            <img id='herostairscube' src={herostairscube} alt="cube" />
            <img id='heropillar' src={heropillar} alt="cube" />
            <Footer />
        </div>
        
    </div>
  )
}

export default HeroSection