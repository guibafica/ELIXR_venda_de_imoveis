import React from 'react';

import Navbar from './components/Navbar/index';
import Hero from './components/Hero';
import DropDown from './components/DropDown';

import { SliderData } from './data/SliderData';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />

      <Navbar />

      <DropDown />

      <Hero slides={SliderData} />
    </>
  );
}

export default App;
