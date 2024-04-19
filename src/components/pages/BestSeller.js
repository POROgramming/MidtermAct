import React from 'react';
import '../styles/BestSeller.css';
import BestSellerImg from '../assets/bestsellerImg.png';
import Ratings from '../assets/ratings.png';
import Pares1 from '../assets/pares1.png';
import Pares2 from '../assets/pares2.png';
import Pares3 from '../assets/pares3.png';
import Pares4 from '../assets/pares4.png';

function BestSeller() {
  return (
    <section className='best-seller-section' id="best-sellers" >
        <div className='best-seller-section__wrapper'>

            <div className='best-seller-section__header'>
                <h3 className='best-seller-section__subtitle'>Best Sellers</h3>
                <h2 className='best-seller-section__title'>Our Top Menu</h2>
            </div>

            <div className='best-seller-section__body'>
                <div className='best-seller-section__headshot-img-wrapper'>
                    <img className='best-seller-section__headshot-img' src={BestSellerImg} ></img>
                </div>
                <div className='best-seller-section__cards-wrapper'>

                    <div className='best-seller-section__card'>
                        <div className='best-seller-section__card-header'>
                            <img className='best-seller-section__food-img' src={Pares1} ></img>
                        </div>
                        <div className='best-seller-section__card-body'>
                            <h3 className='best-seller-section__food-name'>Beef Pares</h3>

                            <div className='best-seller-section__card-footer'>
                                <h3 className='best-seller-section__food-price'>₱ 100.00</h3>
                                <img className='best-seller-section__rating-img' src={Ratings}></img>
                            </div>
                        </div>
                    </div>

                    <div className='best-seller-section__card'>
                        <div className='best-seller-section__card-header'>
                            <img className='best-seller-section__food-img' src={Pares2} ></img>
                        </div>
                        <div className='best-seller-section__card-body'>
                            <h3 className='best-seller-section__food-name'>Lechon Kawali</h3>

                            <div className='best-seller-section__card-footer'>
                                <h3 className='best-seller-section__food-price'>₱ 100.00</h3>
                                <img className='best-seller-section__rating-img' src={Ratings}></img>
                            </div>
                        </div>
                    </div>

                    <div className='best-seller-section__card'>
                        <div className='best-seller-section__card-header'>
                            <img className='best-seller-section__food-img' src={Pares3} ></img>
                        </div>
                        <div className='best-seller-section__card-body'>
                            <h3 className='best-seller-section__food-name'>Fried Chicken</h3>

                            <div className='best-seller-section__card-footer'>
                                <h3 className='best-seller-section__food-price'>₱ 100.00</h3>
                                <img className='best-seller-section__rating-img' src={Ratings}></img>
                            </div>
                        </div>
                    </div>

                    <div className='best-seller-section__card'>
                        <div className='best-seller-section__card-header'>
                            <img className='best-seller-section__food-img' src={Pares4} ></img>
                        </div>
                        <div className='best-seller-section__card-body'>
                            <h3 className='best-seller-section__food-name'>Pork BBQ</h3>

                            <div className='best-seller-section__card-footer'>
                                <h3 className='best-seller-section__food-price'>₱ 100.00</h3>
                                <img className='best-seller-section__rating-img' src={Ratings}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default BestSeller