import React from 'react'
import stocksphone from '../assets/investingstocks.png'
import bitcoinphone from '../assets/investingbitcoin.png'
import FooterWhite from './FooterWhite'

const InvestingSection = () => {
  return (
    <div className='investingContainer'>
        <h1>Investing</h1>
        <div className="investingBox">
            <div className="ibls">
                <div className="investingTextBox">
                    <h2>Stocks</h2>
                    <p>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
                </div>
                <img src={stocksphone} alt="phone showing stocks" />
            </div>
            
            {/* <div className="investingImages">
                <img src={stocksphone} alt="phone showing stocks" />
                <img src={bitcoinphone} alt="phone showing bitcoin" />
            </div> */}
            <div className="ibrs">
                <img src={bitcoinphone} alt="phone showing bitcoin" />
                <div className="investingTextBox">
                <h2>Bitcoin</h2>
                <p>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>
                </div>
            </div>
            
        </div>
        <FooterWhite />
    </div>
  )
}

export default InvestingSection