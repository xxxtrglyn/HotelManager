import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video  loop autoPlay>
        <source src="../videos/video-1.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      <h1>HOTEL MANAGER</h1>
      <p>Black Cleaver present</p>
      <div className='hero-btns'>
       
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          TO BOOKHOTEL PAGE <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
