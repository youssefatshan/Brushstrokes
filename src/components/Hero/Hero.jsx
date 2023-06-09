import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight } from 'react-icons/bs';
import {motion} from 'framer-motion';

const Hero = () => {

  const transition = {duration: 3, type: "spring "};
  const mobile = window.innerWidth<=768? true:false;

  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>
        <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>
              {" "}
              Seedily say has suitable disposal and boy. Exercise joy man children
             </span>
        </div>
      </div>
        {/* middle side hero image */}
        <div className={css.wrapper}>
            {/* Blue Circle */}
            <motion.div
            initial={{bottom: !mobile && "2rem"}}
            whileInView={{bottom: "0rem"}} 
            className={css.blueCircle}
            transition={transition}></motion.div>
            {/* Hero Image */}
            <motion.img 
            transition={transition}
            initial={{bottom: !mobile && "-2rem"}}
            whileInView={{bottom:"0rem"}} 
            src={HeroImg} 
            alt="" 
            width={600}/>
            {/* Cart Div Animating */}
            <motion.div
            transition={transition}
            initial={{right: !mobile && "4%"}}
            whileInView={{right: !mobile && "2%"}}
            className={css.cart2}>
                <RiShoppingBagFill />
                
                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                    <div><BsArrowRight /></div>
                </div>
            </motion.div>
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
