import React from 'react'
import phone from '../assets/cashcardphone.png'

const CashCardSection = () => {
  return (
    <div className='cashcardContainer'>
        <div className="cashcardText">
            <h1>Cash Card <br></br>& Boost</h1>
            <p>Send and receive money with anyone, donate  to an important cause, or tip professionals. 
            Just enter a $cashtag, phone number, or 
            scan their  QR code to pay.</p>
        </div>
        <img id='cashcardphone' src={phone} alt="mobile phone" />
    </div>
  )
}

export default CashCardSection