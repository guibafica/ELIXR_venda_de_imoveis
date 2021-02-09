/* eslint-disable prefer-destructuring */
import React from 'react';

import Button from '../Button';

import * as S from './styles';

function InfoSection() {
  return (
    <S.Section>
      <S.Container>
        <S.ColumnLeft>
          <h1>Heading</h1>
          <p>paragraph</p>
          <p>paragraph</p>

          <Button to="/homes" content="label" />
        </S.ColumnLeft>

        <S.ColumnRight>
          <img src="" alt="casa" />
        </S.ColumnRight>
      </S.Container>
    </S.Section>
  );
}

export default InfoSection;
