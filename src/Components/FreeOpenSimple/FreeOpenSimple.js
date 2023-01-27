import React from 'react'
import './FreeOpenSimple.css'
import LapTop from '../../images/illustration-laptop-desktop.svg'

function FreeOpenSimple() {
  return (
    <div className='freeOpenSimple'>
        <div className="freeSimpleLeft">
           <img className='freeImg' src={LapTop} alt="LapTop" />
        </div>
        <div className="freeSimpleRight">
            <div className="freeSimpleContent">
            <div className="freeTopSec">
            <h2>Free,Open,Simple</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="freeBottomSec">
            <h2>Free,Open,Simple</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            </div>
           
         
        </div>

    </div>
  )
}

export default FreeOpenSimple