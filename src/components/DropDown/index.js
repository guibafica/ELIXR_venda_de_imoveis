/* eslint-disable arrow-body-style */
import React from 'react';

import { menuData } from '../../data/MenuData';

import Button from '../Button';

import * as S from './styles';

const DropDown = () => {
  return (
    <S.DropdownContainer>
      <S.Icon>
        <S.CloseIcon />
      </S.Icon>

      <S.DropdownWrapper>
        <S.DropdownMenu>
          {menuData.map((item, index) => (
            <S.DropdownLink to={item.link} key={index}>
              {item.title}
            </S.DropdownLink>
          ))}
        </S.DropdownMenu>

        <S.BtnWrap>
          <Button
            content="Contate-Nos"
            primary={true}
            round={true}
            big={true}
            to="/contact"
          />
        </S.BtnWrap>
      </S.DropdownWrapper>
    </S.DropdownContainer>
  );
};

export default DropDown;
