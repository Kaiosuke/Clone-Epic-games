"use strict";
// Open filter wishklist mb
const toggleFilerWishListMb = () => {
    const body = document.querySelector("body");
    const filterMain = document.querySelector(".wrapper-filter");
    const filterBtn = document.querySelector(".game-right");
    const closeFilter = document.querySelector(".close-filter");
    filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.addEventListener("click", () => {
        filterMain === null || filterMain === void 0 ? void 0 : filterMain.classList.add("search-active");
        body === null || body === void 0 ? void 0 : body.classList.add("overlay");
        body;
    });
    closeFilter === null || closeFilter === void 0 ? void 0 : closeFilter.addEventListener("click", () => {
        filterMain === null || filterMain === void 0 ? void 0 : filterMain.classList.remove("search-active");
        body === null || body === void 0 ? void 0 : body.classList.remove("overlay");
    });
};
toggleFilerWishListMb();
