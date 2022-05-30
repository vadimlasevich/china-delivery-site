export const carousel = (slidesLenght, sectionName) => {
  const sliderContainer = document.querySelector(`.${sectionName}-slider__container`);
  const sliderBtnNext = document.querySelector(`.${sectionName}-slider__button-next`);
  const sliderBtnPrev = document.querySelector(`.${sectionName}-slider__button-prev`);
  const sliderSlides = document.querySelectorAll(`.${sectionName}-slider__slide`);
  const sliderDots = document.querySelectorAll(`.${sectionName}-slider__slide-dot`);

  console.log(slidesLenght, sectionName);

  let count = 0;

  const activeDots = (count) => {
    sliderDots.forEach((dot) => {
      dot.classList.remove('active-dot');
    });
    sliderDots[count].classList.add('active-dot');
  };

  const nextSlide = () => {
    if (count === slidesLenght) {
      count = 0;
      rollSlider(count);
      activeDots(count);
    } else {
      count++;
      rollSlider(count);
      activeDots(count);
    }
  };

  const prevSlide = () => {
    if (count === 0) {
      count = slidesLenght;
      rollSlider(count);
      activeDots(count);
    } else {
      count--;
      rollSlider(count);
      activeDots(count);
    }
  };

  const rollSlider = (count) => {
    let widthSlide = sliderSlides[0].offsetWidth;
    sliderContainer.style.transform = `translate(-${count * widthSlide}px)`;
  };

  sliderDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      rollSlider(dotIndex);
      activeDots(dotIndex);
    });
  });

  sliderBtnNext.addEventListener('click', nextSlide);
  sliderBtnPrev.addEventListener('click', prevSlide);
};
