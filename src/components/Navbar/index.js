import React from 'react';

import { menuData } from '../../data/MenuData';
import Button from '../Button';

import * as S from './styles';

function Navbar({ toggle }) {
  return (
    <S.Nav>
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
