/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useState, useRef, useEffect } from 'react';

import Button from '../Button';

import * as S from './styles';

function Hero({ slides }) {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <S.HeroSection>
      <S.HeroWrapper>
        {slides.map((slide, index) => (
          <S.HeroSlide key={index}>
            {index === current && (
              <S.HeroSlider>
                <S.HeroImage src={slide.image} alt={slide.alt} />

                <S.HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>

                  <Button
                    content={slide.label}
                    primary={false}
                    maxWidth={true}
                  />
                </S.HeroContent>
              </S.HeroSlider>
            )}
          </S.HeroSlide>
        ))}

        <S.SliderButtons>
          <S.PrevArrow onClick={prevSlide} />

          <S.NextArrow onClick={nextSlide} />
        </S.SliderButtons>
      </S.HeroWrapper>
    </S.HeroSection>
  );
}

export default Hero;
