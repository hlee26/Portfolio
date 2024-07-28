import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/domegold-transformed.jpeg' alt="Background"className="background-photo"/>
      <h1>Henry Lee</h1>
      <p>Hello, my name is Henry. I am currently studying Computer Science at the University of Notre Dame.
        Throughout my academic journey thus far, I have formed a firm foundation in software engineering, and I am
        very passionate about predictive modeling with AI and its potential to anticipate future trends or outcomes. 
        Please reach out anytime and Go Irish!
      </p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
