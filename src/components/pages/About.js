import React from 'react';
import '../styles/About.css';
import AboutImg from '../assets/aboutImg.png';
import Arrows from '../assets/arrowImg.png';


function About() {
  return (
   <section className='about-section' id="about" >
        <div className='about-section__wrapper'>
            <div className='about-section__img-wrapper'>
                <img className='about-section__group-photo' src={AboutImg} ></img>
                <img className='about-section__arrow' src={Arrows} ></img>
            </div>
            <div className='about-section__body'>
                <h3 className='about-section__section-subtitle'>About Us</h3>
                <h2 className='about-section__section-title'>Discover Us</h2>
                <h2 className='about-section__description-title'>Discover the charm of Filipino flavors at <span className='about-section__description-title--colored'>Diwata Pares Overload</span>, a hidden gem nestled in Pasay.</h2>
                <p className='about-section__description'>Inspired by the warmth of Filipino hospitality and the richness of our culinary heritage, Diwata Pares offers a delightful fusion of traditional favorites and contemporary twists. Our menu is a tantalizing journey through beloved Filipino classics, from the savory richness of our signature pares to the comforting goodness of our dish and the irresistible flavors of our specialty.</p>
            </div>
        </div>
   </section>
  )
}

export default About