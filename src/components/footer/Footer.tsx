import React from 'react';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import twitter from '../../assets/icon-twitter.svg';

export const Footer = () => {
  const socials = [facebook, twitter, pinterest, instagram];

  return (
    <footer className='footer'>
      <div className='footer__left'>
        <img className='logo' src={logo} alt='logo' />
        <nav className='footer__nav'>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </nav>
      </div>
      <div className='footer__right'>
        <div className='footer__socials'>
          {socials.map((social, index) => (
            <img
              key={index}
              src={social}
              alt={social}
              className='social pointer'
            />
          ))}
        </div>
        <p className='footer__disclaimer'>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
