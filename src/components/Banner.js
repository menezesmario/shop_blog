import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Banner.css';

function Banner() {
  return (
    <div className='hero-container'>
      <video src='/videos/coffeebanner.mp4' autoPlay loop muted />
      <h1>reCoffee, o café do programador</h1>
      <p>Conheça nossos produtos</p>
      <div className='hero-btns'>
        <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Saiba Mais
        </Button>
        <Button className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}>
          Adquira o seu
        </Button>
      </div>
    </div>
  );
}

export default Banner;
