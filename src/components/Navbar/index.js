import React, { useState, useEffect } from 'react';

import { menuData } from '../../data/MenuData';
import Button from '../Button';

import * as S from './styles';

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <S.Nav scrollNav={scrollNav}>
      <S.Logo to="/">ELIXR</S.Logo>

      <S.Menubars onClick={toggle} />

      <S.NavMenu>
        {menuData.map((item, index) => (
          <S.NavMenuLinks to={item.link} key={index}>
            {item.title}
          </S.NavMenuLinks>
        ))}
      </S.NavMenu>

      <S.NavBtn>
        <Button content="Contate-Nos" primary={true} />
      </S.NavBtn>
    </S.Nav>
  );
}

export default Navbar;
