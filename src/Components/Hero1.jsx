'use client'
import React from 'react';

import '../Styles/Hero/Hero.modules.scss'
import header from "../Images/Header.png"

function Hero1() {
  return (
      <div className="Hero1">
           <img src={header.src} alt="Electric vehicles on-demand" />
            <p>Get the app for a fast, flexible and cost <br/> effective way to rent vehicles in Bermuda.</p>
            <div className="buttons">
                <button className="getAppButton">Get the app</button>
                <button className="registerButton">Register now</button>
            </div>
      </div>
  );
}

export default Hero1;