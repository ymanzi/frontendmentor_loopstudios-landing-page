import React from 'react';
import { NavBar } from './NavBar';
import logo from '../../assets/logo.svg';
import hamburgerMenu from '../../assets/icon-hamburger.svg';

export const Header = ({ setMobileMenu }: { setMobileMenu: Function }) => {
  return (
    <header className='header__img'>
      <div className='header__menu'>
        <img className='logo z-index' src={logo} alt='logo' />
        <img
          alt='hamburger'
          className='hamburger-menu z-index pointer'
          src={hamburgerMenu}
          onClick={() => setMobileMenu(true)}
        />
        <NavBar />
      </div>
      <p className='header__title z-index'>
        Immersive experiences that deliver
      </p>
    </header>
  );
};
