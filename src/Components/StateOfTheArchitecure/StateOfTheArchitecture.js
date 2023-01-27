import React from 'react'
import './StateOfTheArchitecture.css'
import Phone from '../../images/illustration-phones.svg'

function StateOfTheArchitecture() {
  return (
    <div className='stateOfTheArchitecture'>
        <div className="stateContentSec">
        <div className="stateLeft">
          <div className="ImageContainer">
          <img className='mobileImage' src={Phone} alt="" />
          </div>
      </div>
      <div className="stateRight">
        <div className="stateContent">
        <h1>State Of The Architecture</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
        </div>     
      </div>
    </div>    
    </div>
  )
}

export default StateOfTheArchitecture