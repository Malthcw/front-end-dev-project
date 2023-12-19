import React from 'react';
import './Hero.css';
const Hero = (props) => {
  return (
    <>
      <div className="hero" data-aos="flip-right">
        <img src={props.heroImg} alt="HeroImg" />
        <div className="Hero-text">
          <div className="card">
            <h1>{props.title}</h1>
            <button>{props.btnName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
