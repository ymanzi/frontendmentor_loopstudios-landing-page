import React from 'react';
import logo from '../../assets/logo.svg';
import close from '../../assets/icon-close.svg';

export const Menu = ({ setMobileMenu }: { setMobileMenu: Function }) => {
  return (
    <div className='black-bg'>
      <header>
        <div className='menu__menu'>
          <img className='logo' src={logo} alt='logo' />
          <img
            alt='close'
            className='close-btn pointer'
            src={close}
            onClick={() => setMobileMenu(false)}
          />
        </div>
        <nav className='menu__nav'>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </nav>
      </header>
    </div>
  );
};
