import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo_white.svg';

function Header() {
  return (
    <header className="header" id="header" >
      <div className="container">
        <a href="" className="logo"><img src={logo}></img></a>
        <input className="menu-btn" type="checkbox" id="menu-btn"/>
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#reward">Agent's Reward</a></li>
          <li><a href="#logistic">Logistic</a></li>
          <li><a href="#trade">Trade</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;