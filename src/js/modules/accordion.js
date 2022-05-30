export const openAccordion = () => {
  const questionsItems = document.querySelectorAll('.questions__item');
  const questionsItemText = document.querySelectorAll('.questions__item-text');
  const questionsItemBtns = document.querySelectorAll('.questions__item-btn');

  questionsItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('questions__item-active');
      questionsItemBtns[index].classList.toggle('arrow-rotate');
      questionsItemText[index].classList.toggle('hidden');
    });
  });
};
