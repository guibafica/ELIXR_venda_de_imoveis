import React from 'react';

import Button from '../Button';

import * as S from './styles';

function Hero({ slides }) {
  return (
    <S.HeroSection>
      <S.HeroWrapper>
        {slides.map((slide, index) => (
          <S.HeroSlide key={index}>
            <S.HeroSlider>
              <S.HeroImage />

              <S.HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>

                <Button content={slide.label} primary={true} maxWidth={true}>
                  <S.Arrow />
                </Button>
              </S.HeroContent>
            </S.HeroSlider>
          </S.HeroSlide>
        ))}
      </S.HeroWrapper>
    </S.HeroSection>
  );
}

export default Hero;
