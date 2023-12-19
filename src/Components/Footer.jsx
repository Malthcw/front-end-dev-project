import React from 'react';
import './Footer.css';
import logo from '../Assets/Images/WhiteLogo.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <img src={logo} alt="Logo" className="logo-img" />
        <p>
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve single objective - your
          business results.
        </p>
      </div>

      <div className="middle">
        <div>
          <h4>Our Technologies</h4>
          <li>React</li>
          <li>Gatsby</li>
          <li>NextJs</li>
          <li>NodeJs</li>
          <li>GraphQl</li>
          <li>Laravel</li>
        </div>
      </div>

      <div className="right">
        <div>
          <h4>Our Services</h4>
          <li>Social Media Marketing</li>
          <li>Web & Mobile App Development</li>
          <li>Data & Analitics</li>
          <li>Google Marketing Solutions</li>
          <li>Search Engine Optimization</li>
        </div>
      </div>

      <hr />
      <div className='bottom'>
    
        <p>Privacy Policy</p>
        <hr />
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
}
