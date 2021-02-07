/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div``;

export const HeroSlider = styled.div``;

export const HeroImage = styled.img``;

export const HeroContent = styled.div``;

export const Arrow = styled(IoMdArrowRoundForward)``;
