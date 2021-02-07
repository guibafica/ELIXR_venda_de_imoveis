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
              <S.HeroImage src={slide.image} alt={slide.alt} />

              <S.HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>

                <Button content={slide.label} primary={false} maxWidth={true} />
              </S.HeroContent>
            </S.HeroSlider>
          </S.HeroSlide>
        ))}

        <S.SliderButtons>
          <S.PrevArrow />

          <S.NextArrow />
        </S.SliderButtons>
      </S.HeroWrapper>
    </S.HeroSection>
  );
}

export default Hero;
