import React, { useState } from 'react';
import './index.css';
import './Desktop.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { Menu } from './components/menu/Menu';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {mobileMenu && <Menu setMobileMenu={setMobileMenu} />}
      {!mobileMenu && (
        <>
          <Header setMobileMenu={setMobileMenu} />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
