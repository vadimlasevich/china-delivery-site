export const burgerMenu = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const sidebar = document.querySelector(".sidebar");
  const shadowed = document.querySelector(".shadowed");
  const sidebarLinks = document.querySelectorAll(".sidebar__link");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-rotate");
    sidebar.classList.toggle("sidebar-active");
    shadowed.classList.toggle("shadowed-active");
    document.body.classList.toggle("stop-scroll");
  });

  shadowed.addEventListener("click", () => {
    burgerMenu.click();
  });
  
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.click();
    });
  });
};
