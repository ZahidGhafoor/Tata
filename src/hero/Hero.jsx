import React from 'react';
import "./Hero.scss"

import hero from "../Assets/heoimg.png"
import video from "../Assets/herovid.mp4"
import Mobile from '../mobile/Mobile';

const Hero = () => {
  return(
      <>
      <div className="hero__container">
          <div className="navbar">
              <div className="left">
                  <div className="home border">HOME</div>
                  <div className="home border">ABOUT US</div>
                  <div className="home">CONTACT US</div>
              </div>
              <div className="left">
              <div className="home border">GOLD</div>
                  <div className="home border">ROSE</div>
                  <div className="home">YOGURT</div>
              </div>

              <div className="logo">
                  <img src={hero} alt="" className="hero__img" />
              </div>
          </div>




          <div className="video">
          <video src={video} autoPlay loop muted />
          <div className="text">
              <h1 className="top">QUALITY COSMETICS</h1>
              <div className="bottom">WITH INGREDIENTS FROM BULGARIA</div>
          </div>
          </div>

          <div className="mobile__nav">
              <Mobile/>
          </div>
      </div>
      </>
  )
};

export default Hero;
