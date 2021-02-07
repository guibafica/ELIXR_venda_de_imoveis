/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  border: ${({ primary }) =>
    primary ? '2px solid #000d1a' : '2px solid #cd853f'};

  &:hover {
    transform: translateY(-2px);

    background: none;
    color: ${({ primary }) => (primary ? '#000d1a' : '#fff')};
  }

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: 160px;
    `}
`;
