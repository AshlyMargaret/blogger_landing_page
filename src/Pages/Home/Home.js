import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import StateOfTheArchitecture from '../../Components/StateOfTheArchitecure/StateOfTheArchitecture'

function Home() {
  return (
    <div className='home'>
      <div className="homeTopBannerSec">
       <div className="headerComponent">
            <Header/>
        </div>
        <div className="bannerText">
           <h1>A modern publishing platform</h1>
           <p>Grow your audiance and build your online brand</p>
           <div className="bannerBtnSec">
            <button className='bannerBtn1'>Start for free</button>
            <button className='bannerBtn2'>Learn More</button>
           </div>
        </div>
      </div>
      <div className="homeMainSecDesignedFor_future">
          <h1>Designed for the future</h1>
          <div className="mainSecLeftSideText">
            <div className="mainSecText1">
            <h4>Introducing an extensive editor</h4>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className="mainSecText2">
            <h4>Robust content management</h4>
             <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
            </div> 
          </div>
      </div>
      <div className="stateOfThe_architecture">
        <StateOfTheArchitecture/>
      </div>
      

    </div>
  )
}

export default Home