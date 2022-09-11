import React, { useEffect } from 'react';

import SplashScreenImage from '../../assets/images/splashscreen.gif';

const SplashScreen = () => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='splashscreen'>
      <div className='splashscreen__loading-holder'>
        <img src={SplashScreenImage} alt='' />
      </div>
    </div>
  );
};

export default SplashScreen;
