import React, { useState } from 'react';
import { MenuItems } from '../Data/MenuItems';
import './Navbar.css';
import logo from '../Assets/Images/WhiteLogo.png';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (

    <nav className="NavbarItems">
    <div className="Navbar-logo">
      <img src={logo} alt="logo" />
    </div>

    <div className="menu-icon" onClick={handleClick}>
      <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>

    {/* Conditionally render the menu items */}
    {window.innerWidth <= 375 ? (
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((items, index) => (
          <li key={index}>
            <div className={items.cName} to={items.url} onClick={handleClick}>
              {items.title}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <ul className="nav-menu">
        {MenuItems.map((items, index) => (
          <li key={index}>
            <div className={items.cName} to={items.url}>
              {items.title}
            </div>
          </li>
        ))}
      </ul>
    )}
  </nav>
  );
}
