import React from 'react';

import * as S from './styles';

function Button({ content, primary, maxWidth }) {
  return (
    <S.Button to="/contact" primary={primary} maxWidth={maxWidth}>
      {content}
    </S.Button>
  );
}

export default Button;
