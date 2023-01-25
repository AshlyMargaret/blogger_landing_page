import React from 'react'
import './Header.css'
import Logo from '../../images/logo.svg'
import DownArrow from '../../images/icon-arrow-light.svg'

function Header() {
  return (
    <div className='header'>
        <div className="leftSec">
        <div className="logoSec">
           <img src={Logo} alt="logo" />
        </div>
        <div className="menuItems">
          <ul>
            <li><a href="">Product</a><img src={DownArrow} alt="" /></li>
            <li><a href="">Company</a><img src={DownArrow} alt="" /></li>
            <li><a href="">Connect</a><img src={DownArrow} alt="" /></li>
          </ul>
        </div>
        </div> 
        <div className="signUp_SignIn">
             <button className='loginBtn'>Login</button>
             <button className='signUpBtn'>SignUp</button>
        </div>

    </div>
  )
}

export default Header