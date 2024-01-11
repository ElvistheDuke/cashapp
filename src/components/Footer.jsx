import React from 'react'
import apple from '../assets/footerapple.png'
import playstore from '../assets/footerplaystore.png'
import arrow from '../assets/footerarrow.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'




const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="footerWrapper">
            <div className="footerButtons">
                <div className="footerButton">
                    <img src={apple} alt="appstore" />
                    <p>APP STORE</p>
                </div>
                <div className="footerButton">
                    <img src={playstore} alt="play store" />
                    <p>GOOGLE PLAY</p>
                </div>
            </div>
            <div className="footerArrow">
                <img src={arrow} alt="down arrow" />
            </div>
            <div className="footerLinks">
                <img src={twitch} alt="twitch logo" />
                <img src={twitter} alt="twitter logo" />
                <img src={instagram} alt="instagram logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer