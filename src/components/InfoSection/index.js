/* eslint-disable prefer-destructuring */
import React from 'react';

import Button from '../Button';

import * as S from './styles';

function InfoSection({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) {
  return (
    <S.Section>
      <S.Container>
        <S.ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>

          <Button to="/homes" content={buttonLabel} primary={true} />
        </S.ColumnLeft>

        <S.ColumnRight reverse={reverse}>
          <img src={image} alt="casa" />
        </S.ColumnRight>
      </S.Container>
    </S.Section>
  );
}

export default InfoSection;
