export const useBurgerMenu = () => {
  const handleBurgerMenu = () => {
    const burgerEl = document.querySelector(".my-burger");
    burgerEl.classList.toggle("open");
  };
  return handleBurgerMenu;
};
