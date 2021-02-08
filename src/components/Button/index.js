import React from 'react';

import * as S from './styles';

function Button({ content, primary, maxWidth, big, round, ...rest }) {
  return (
    <S.Button
      to="/contact"
      primary={primary}
      big={big}
      round={round}
      maxWidth={maxWidth}
      {...rest}
    >
      {content}
    </S.Button>
  );
}

export default Button;
