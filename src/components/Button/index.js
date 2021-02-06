import React from 'react';

import * as S from './styles';

function Button({ content, primary }) {
  return (
    <S.Button to="/contact" primary={primary}>
      {content}
    </S.Button>
  );
}

export default Button;
