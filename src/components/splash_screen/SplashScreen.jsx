import React from "react";
import SplashScreenImage from '../../assets/images/splashscreen.gif'

const SplashScreen = () => {
  return (
    <div className='splashscreen'>
      <div className='splashscreen__loading-holder'>
        <img src={SplashScreenImage} alt="" />
      </div>
    </div>
  );
};

export default SplashScreen;
