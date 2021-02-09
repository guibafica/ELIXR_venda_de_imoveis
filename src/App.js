import React, { useState } from 'react';

import Navbar from './components/Navbar/index';
import Hero from './components/Hero';
import DropDown from './components/DropDown';
import InfoSection from './components/InfoSection';

import { SliderData } from './data/SliderData';

import GlobalStyle from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />

      <Navbar toggle={toggle} />

      <DropDown isOpen={isOpen} toggle={toggle} />

      <Hero slides={SliderData} />

      <InfoSection />
    </>
  );
}

export default App;
