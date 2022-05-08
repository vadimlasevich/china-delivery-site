/*Проверка поддержки webp*/
export const isWebp = () => {
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "";
  }

  testWebp(function (support) {
    let className = support == true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
};

export const costСalculation = () => {
  const calculationButtonsNext = document.querySelectorAll(".calculation-item__button-next");
  const calculationButtonBack = document.querySelector(".calculation-item__button-back");
  const calculationItems = document.querySelectorAll(".calculation__item");

  function switchingSteps(index) {
    calculationItems.forEach((item) => {
      item.classList.remove("calculation__item-active");
    });
    calculationItems[index + 1].classList.add("calculation__item-active");
  }

  calculationButtonsNext.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      switchingSteps(index);
    });
  });
  
  calculationButtonBack.addEventListener("click", () => {
    switchingSteps(-1);
  });
};

export const openAccordion = () => {
  const questionsItems = document.querySelectorAll(".questions__item");
  const questionsItemText = document.querySelectorAll(".questions__item-text");
  const questionsItemBtns = document.querySelectorAll(".questions__item-btn");

  questionsItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("questions__item-active");
      questionsItemBtns[index].classList.toggle("arrow-rotate");
      questionsItemText[index].classList.toggle("hidden");
    });
  });
};
