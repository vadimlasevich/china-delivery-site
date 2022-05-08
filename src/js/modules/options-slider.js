export const optionsSlider = () => {
  const optionsSliderContainer = document.querySelector(".options-slider__slides");
  const optionsSliderBtnNext = document.querySelector(".options-slider__button-next");
  const optionsSliderBtnPrev = document.querySelector(".options-slider__button-prev");
  const optionsSliderSlides = document.querySelectorAll(".options-slider__slide");
  const optionsSliderDots = document.querySelectorAll(".options-slider__slide-dot");

  let index = 0;
  let widthSlide = optionsSliderSlides[0].offsetWidth;
  let marginSlideStr = getComputedStyle(optionsSliderSlides[0]).marginRight;
  let marginSlideNumber = parseInt(marginSlideStr.substring(0, marginSlideStr.length - 2));

  window.addEventListener("resize", () => {
    widthSlide = optionsSliderSlides[0].offsetWidth;
    marginSlideStr = getComputedStyle(optionsSliderSlides[0]).marginRight;
    marginSlideNumber = parseInt(marginSlideStr.substring(0, marginSlideStr.length - 2));
  });

  function slideNext() {
    if (window.innerWidth < 620) {
      if (index == optionsSliderSlides.length - 1) {
        index = 0;
        sliderRoll(index);
      } else {
        index++;
        sliderRoll(index);
      }
    } else if (window.innerWidth < 1200) {
      if (index == optionsSliderSlides.length - 2) {
        index = 0;
        sliderRoll(index);
      } else {
        index++;
        sliderRoll(index);
      }
    } else {
      if (index == optionsSliderSlides.length - 3) {
        index = 0;
        sliderRoll(index);
      } else {
        index++;
        sliderRoll(index);
      }
    }
  }

  function slidePrev() {
    if (window.innerWidth < 620) {
      if (index == 0) {
        index = optionsSliderSlides.length - 1;
        sliderRoll(index);
      } else {
        index--;
        sliderRoll(index);
      }
    } else if (window.innerWidth < 1200) {
      if (index == 0) {
        index = optionsSliderSlides.length - 2;
        sliderRoll(index);
      } else {
        index--;
        sliderRoll(index);
      }
    } else {
      if (index == 0) {
        index = optionsSliderSlides.length - 3;
        sliderRoll(index);
      } else {
        index--;
        sliderRoll(index);
      }
    }
  }
  function optionsActiveDot(i) {
    optionsSliderDots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });
    optionsSliderDots[i].classList.add("active-dot");
  }

  function sliderRoll(index) {
    optionsSliderContainer.style.transform = `translate(-${(marginSlideNumber + widthSlide) * index}px)`;
  }

  optionsSliderDots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
      sliderRoll(indexDot);
      optionsActiveDot(indexDot);
    });
  });

  optionsSliderBtnNext.addEventListener("click", slidePrev);
  optionsSliderBtnPrev.addEventListener("click", slideNext);
};
