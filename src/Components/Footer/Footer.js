import React from 'react'
import './Footer.css'
import Logo from '../../images/logo.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer1">
            <img src={Logo} alt="logo" />
        </div>
        <div className="footer2">
            <p>Product</p>
            <ul className='foterUl'>
                <li><a href="">OverView</a></li>
                <li><a href=""></a>Pricing</li>
                <li><a href="">ggfgg</a></li>
                <li><a href="">cvbccn</a></li>
                <li><a href="">cvbnnn</a></li>
            </ul>
        </div>
        <div className="footer3">
           <p>Company</p>
            <ul className='foterUl'>
                <li><a href="">cvnnn</a></li>
                <li><a href="">bvvnvn</a></li>
                <li><a href="">nvnnn</a></li>
                <li><a href="">bnnnnv</a></li>
                <li><a href="">hhjkhk</a></li>
            </ul>
        </div>
        <div className="footer4">
           <p>Connect</p>
            <ul className='foterUl'>
                <li><a href="">jhjhjhg</a></li>
                <li><a href="">hjhjjh</a></li>
                <li><a href="">jhhjhj</a></li>
                <li><a href="">jjgjg</a></li>
                <li><a href="">jghjh</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer