export const costСalculation = () => {
  const calculationButtonsNext = document.querySelectorAll('.calculation-item__button-next');
  const calculationButtonBack = document.querySelector('.calculation-item__button-back');
  const calculationItems = document.querySelectorAll('.calculation__item');

  function switchingSteps(index) {
    calculationItems.forEach((item) => {
      item.classList.remove('calculation__item-active');
    });
    calculationItems[index + 1].classList.add('calculation__item-active');
  }

  calculationButtonsNext.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      switchingSteps(index);
    });
  });

  calculationButtonBack.addEventListener('click', () => {
    switchingSteps(-1);
  });
};
