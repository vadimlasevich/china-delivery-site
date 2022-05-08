export const servicesSlider = () => {
  const servicesSliderContainer = document.querySelector(".services-slider__slides");
  const servicesSliderSlides = document.querySelectorAll(".services-slider__slide");
  const servicesSliderBtnNext = document.querySelector(".services-slider__button-next");
  const servicesSliderBtnPrev = document.querySelector(".services-slider__button-prev");
  const servicesSliderDots = document.querySelectorAll(".services-slider__slide-dot");

  let ind = 0;
  let widthSlideServices = servicesSliderSlides[0].offsetWidth;
  let marginSlideServicesStr = getComputedStyle(servicesSliderSlides[0]).marginRight;
  let marginSlideServicesNumber = parseInt(marginSlideServicesStr.substring(0, marginSlideServicesStr.length - 2));

  window.addEventListener("resize", () => {
    widthSlideServices = servicesSliderSlides[0].offsetWidth;
  });

  function slideServicesNext() {
    if (window.innerWidth < 620) {
      if (ind == servicesSliderSlides.length - 1) {
        ind = 0;
        sliderServicesRoll(ind);
      } else {
        ind++;
        sliderServicesRoll(ind);
      }
    } else if (window.innerWidth < 1200) {
      if (ind == servicesSliderSlides.length - 2) {
        ind = 0;
        sliderServicesRoll(ind);
      } else {
        ind++;
        sliderServicesRoll(ind);
      }
    } else {
      if (ind == servicesSliderSlides.length - 3) {
        ind = 0;
        sliderServicesRoll(ind);
      } else {
        ind++;
        sliderServicesRoll(ind);
      }
    }
  }

  function slideServicesPrev() {
    if (window.innerWidth < 620) {
      if (ind == 0) {
        ind = servicesSliderSlides.length - 1;
        sliderServicesRoll(ind);
      } else {
        ind--;
        sliderServicesRoll(ind);
      }
    } else if (window.innerWidth < 1200) {
      if (ind == 0) {
        ind = servicesSliderSlides.length - 2;
        sliderServicesRoll(ind);
      } else {
        ind--;
        sliderServicesRoll(ind);
      }
    } else {
      if (ind == 0) {
        ind = servicesSliderSlides.length - 3;
        sliderServicesRoll(ind);
      } else {
        ind--;
        sliderServicesRoll(ind);
      }
    }
  }

  function servicesActiveDot(i) {
    servicesSliderDots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });
    servicesSliderDots[i].classList.add("active-dot");
  }

  function sliderServicesRoll(ind) {
    servicesSliderContainer.style.transform = `translate(-${(marginSlideServicesNumber + widthSlideServices) * ind}px)`;
  }

  servicesSliderDots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
      sliderServicesRoll(indexDot);
      servicesActiveDot(indexDot);
    });
  });

  servicesSliderBtnNext.addEventListener("click", slideServicesPrev);
  servicesSliderBtnPrev.addEventListener("click", slideServicesNext);
};
