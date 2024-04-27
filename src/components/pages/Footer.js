import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <footer className='footer' id="footer">
        <div className='footer-wrapper'>
            <div className='footer__header'>
                <img className='footer__logo' src={Logo}></img>
                <h3 className='footer__header-text'>Connect With Us !</h3>
            </div>
            <div className='footer__body'>
                <div className='footer__address-wrapper'>
                    <h3 className='footer__address'>Diokno Boulevard near GSIS Pasay City, Philippines</h3>
                    <p className='footer__copyright'>© 2024 Diwata Pares Overload. All Rights Reserved.</p>
                </div>
                <div className='footer__contact-number-wrapper'>
                    <p className='footer__contact-network'>Globe</p>
                    <p className='footer__contact-number'>0917-7892-356</p>
                    <p className='footer__contact-network'>Smart</p>
                    <p className='footer__contact-number'>0928-5610-947</p>
                </div>
                <div className='footer__socials-wrapper'>
                    <a href='https://www.facebook.com/profile.php?id=61557725137791' target="_blank" rel="noopener noreferrer" className='footer__social-link'>
                        <FontAwesomeIcon icon={faFacebookSquare} className='footer__social-link-icon'/> 
                        <p className='footer__social-text'>@Diwata Pares OverLoad</p>
                    </a>
                    <a href='https://www.youtube.com/watch?v=PTI1KZexqP4&t=28s' target="_blank" rel="noopener noreferrer" className='footer__social-link'>
                        <FontAwesomeIcon icon={faYoutube} className='footer__social-link-icon'/>
                        <p className='footer__social-text'>@Diwata Pares OverLoad</p>
                    </a>
                    <a href='https://www.instagram.com/explore/locations/232724349920023/diwata-pares-over-fans-page/' target="_blank" rel="noopener noreferrer" className='footer__social-link'>
                        <FontAwesomeIcon icon={faSquareInstagram} className='footer__social-link-icon'/> 
                        <p className='footer__social-text'>@Diwata Pares OverLoad</p>
                    </a>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer