"use strict";
// Open cart
const toggleCart = () => {
    const checkOutElement = document.querySelector(".check-out");
    const checkOutBtn = document.querySelector(".open-check-out");
    const closeBtn = document.querySelectorAll(".close-check-out");
    checkOutBtn === null || checkOutBtn === void 0 ? void 0 : checkOutBtn.addEventListener("click", () => {
        checkOutElement === null || checkOutElement === void 0 ? void 0 : checkOutElement.classList.add("active-block");
    });
    closeBtn.forEach((element) => {
        element.addEventListener("click", () => {
            checkOutElement === null || checkOutElement === void 0 ? void 0 : checkOutElement.classList.remove("active-block");
        });
    });
};
toggleCart();
