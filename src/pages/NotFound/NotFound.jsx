import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDButton from '../../components/buttons/three_d_button/ThreeDButton';
import Image from '../../assets/images/psyduck.png';

const NotFound = () => {
  const navigation = useNavigate();

  const returnHome = () => {
    navigation('/');
  };
  return (
    <div className='notfound'>
      <div className='notfound__col'>
        <div className='notfound__img-holder'>
          <img src={Image} alt='Error Image' />
        </div>
      </div>
      <div className='notfound__col'>
        <div className='notfound__status'>Error 404</div>
        <ThreeDButton buttonText='Go Home' onClick={returnHome} />
      </div>
    </div>
  );
};

export default NotFound;
