import { carousel } from './carouselSlider.js';

export const sliderOptions = () => {
  const slides = document.querySelectorAll(`.options-slider__slide`);
  const windowWidth = {
    small: 620,
    medium: 1200,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.small) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 2);
    } else {
      return (slidesLenght = slides.length - 3);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'options');
};

export const sliderServices = () => {
  const slides = document.querySelectorAll(`.services-slider__slide`);
  const windowWidth = {
    small: 620,
    medium: 1200,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.small) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 2);
    } else {
      return (slidesLenght = slides.length - 3);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'services');
};

export const sliderFirstScreen = () => {
  const slides = document.querySelectorAll(`.first-screen-slider__slide`);
  let slidesLenght = slides.length - 1;

  carousel(slidesLenght, 'first-screen');
};
