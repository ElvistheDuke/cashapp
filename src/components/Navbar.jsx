import React from 'react'
import naveye from '../assets/naveye.png'
import navdollar from '../assets/navdollar.png'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className="navIcon">
            <img src={navdollar} alt="dollar sign" />
        </div>
        <div className="navItems">
            <div className="navItem">SIGN IN</div>
            <div className="navItem">LEGAL</div>
            <div className="navItem">LICENSES</div>
            <div className="navItem">SECURITY</div>
            <div className="navItem">CAREERS</div>
            <div className="navItem">PRESS</div>
            <div className="navItem">SUPPORT</div>
            <div className="navItem">STATUS</div>
            <div className="navItem">CODEBLOG</div>
        </div>
        <div className="navIcon">
            <img src={naveye} alt="eye pupil" />
        </div>
    </div>
  )
}

export default Navbar