export const firstScreenSlider = () => {
  const firstScreenSlides = document.querySelectorAll(".first-screen__slider-slide");
  const firstScreenSliderButtonNext = document.querySelector(".first-screen__slider-button-next");
  const firstScreenSliderButtonPrev = document.querySelector(".first-screen__slider-button-prev");
  const firstScreenSliderDots = document.querySelectorAll(".first-screen__slide-dot");
  const firstScreenSliderContainer = document.querySelector(".first-screen__slider-slides");

  let count = 0;
  let containerWidth = firstScreenSliderContainer.offsetWidth;

  window.addEventListener("resize", () => {
    containerWidth = firstScreenSliderContainer.offsetWidth;
  });

  function activeDot(index) {
    firstScreenSliderDots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });
    firstScreenSliderDots[index].classList.add("active-dot");
  }

  function nextSlide() {
    if (count == firstScreenSlides.length - 1) {
      count = 0;
      rollSlider(count);
      activeDot(count);
    } else {
      count++;
      rollSlider(count);
      activeDot(count);
    }
  }

  function prevSlide() {
    if (count == 0) {
      count = firstScreenSlides.length - 1;
      rollSlider(count);
      activeDot(count);
    } else {
      count--;
      rollSlider(count);
      activeDot(count);
    }
  }

  function rollSlider(count) {
    firstScreenSliderContainer.style.transform = `translate(-${containerWidth * count}px)`;
  }

  firstScreenSliderDots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
      rollSlider(indexDot);
      activeDot(indexDot);
    });
  });

  firstScreenSliderButtonNext.addEventListener("click", nextSlide);
  firstScreenSliderButtonPrev.addEventListener("click", prevSlide);
};
