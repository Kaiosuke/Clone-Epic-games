// Open cart
const toggleCart = (): any => {
  const checkOutElement = document.querySelector(".check-out");
  const checkOutBtn = document.querySelector(".open-check-out");
  const closeBtn = document.querySelectorAll(".close-check-out");
  checkOutBtn?.addEventListener("click", (): any => {
    checkOutElement?.classList.add("active-block");
  });
  closeBtn.forEach((element): any => {
    element.addEventListener("click", (): any => {
      checkOutElement?.classList.remove("active-block");
    });
  });
};

toggleCart();
