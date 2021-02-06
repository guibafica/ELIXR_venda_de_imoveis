import React from 'react';

import { menuData } from '../../data/MenuData';

import * as S from './styles';

function Navbar() {
  return (
    <S.Nav>
      <S.Logo to="/">ELIXR</S.Logo>

      <S.Menubars />

      <S.NavMenu>
        {menuData.map((item, index) => (
          <S.NavMenuLinks to={item.link} key={index}>
            {item.title}
          </S.NavMenuLinks>
        ))}
      </S.NavMenu>
    </S.Nav>
  );
}

export default Navbar;
