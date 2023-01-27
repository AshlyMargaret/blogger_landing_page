import React from 'react'
import './Header.css'
import Logo from '../../images/logo.svg'
import DownArrow from '../../images/icon-arrow-light.svg'
import UpArrow from '../../images/arrow-up-solid.svg'
import { useState } from 'react'

function Header() {

const [dropDown, setState] = useState(false)

  return (
    <div className='header'>
        <div className="leftSec">
        <div className="logoSec">
           <img src={Logo} alt="logo" />
        </div>
        <div className="menuItems">
          <ul>
            <li><a href="#">Product</a><img src={DownArrow} alt="" /></li>
            <li><a href="#">Company</a><img src={DownArrow} alt="" /></li>
            <li  onClick={(e)=>{
               e.currentTarget.style.textDecoration = 'underline';
              setState(!dropDown)
             
            }}><a href="#">Connect</a>{!dropDown? <img src={DownArrow} alt="" />: <img className='up' src={UpArrow} alt="" />} </li>
          </ul>
          {
            dropDown ? 
            <div className="dropDown">
            <ul className='dropDownUl'>
              <li><a href="#">Contact</a></li>
              <li><a href="#">NewsLetter</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div> : null
          }
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