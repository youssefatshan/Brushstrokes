import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight } from 'react-icons/bs';


function Hero() {
  return (
    <div className={css.container}>
      
      <div className={css.h_sides}>
        <span>Skin protection cream</span>
        <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>
              {" "}
              Seedily say has suitable disposal and boy. Exercise joy man</span>
        </div>
      </div>
        {/* middle side hero image */}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600}/>    
            <div className={css.cart2}>
                <RiShoppingBagFill />
                
                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                    <div><BsArrowRight /></div>
                </div>
            </div>
        </div>

        {/* right side */}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
          </div>
          <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
          </div> 
        </div>   
    </div>
  )
}

export default Hero
