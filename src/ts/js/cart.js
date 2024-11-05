"use strict";
// Open cart
const toggleCart = () => {
    const checkOutElement = document.querySelector(".check-out");
    const checkOutBtn = document.querySelector(".open-check-out");
    const closeBtn = document.querySelectorAll(".close-check-out");
    checkOutBtn?.addEventListener("click", () => {
        checkOutElement?.classList.add("active-block");
    });
    closeBtn.forEach((element) => {
        element.addEventListener("click", () => {
            checkOutElement?.classList.remove("active-block");
        });
    });
};
toggleCart();
