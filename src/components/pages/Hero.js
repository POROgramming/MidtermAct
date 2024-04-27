import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';
import heroImg from '../assets/heroImg.png';

function Hero() {
  return (
    <section className='hero-section' id="home">
        <div className='hero-section__wrapper'>
            <div className='hero-section__header-wrapper'>
                <h1 className='hero-section__title'>Tikman ang Trending Pares ng nag-iisang <span className='hero-section__title-colored'>Diwata ng Paresan !</span></h1>
                <p className='hero-section__supporting-text'>Nagmula sa kalangitan, lumagapak sa kalupaan. Narito na sainyong harapan, ang nagiisang Diwata na mukang kawatan !</p>
                <Link to= '/menu' ><button className='hero-section__button'>View Menu</button></Link>
            </div>
            <div className='hero-section__img-wrapper'>
                <img className='hero-section__img' src={heroImg} ></img>
            </div>
        </div>
    </section>
  )
}

export default Hero