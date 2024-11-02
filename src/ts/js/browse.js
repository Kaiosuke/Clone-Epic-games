"use strict";
// Splide
function spliceBrowse() {
    document.addEventListener("DOMContentLoaded", function () {
        // Gender
        const splidePopular = new Splide("#splice-popular", {
            type: "loop",
            perPage: 5,
            pagination: 0,
            gap: 16,
            autoplay: true,
            interval: 5000,
            classes: {
                arrows: "splide__arrows popular-arrows",
                arrow: "splide__arrow popular-arrow",
            },
            breakpoints: {
                1024: {
                    perPage: 4,
                },
                768: {
                    perPage: 2,
                },
            },
        });
        splidePopular.mount();
        // List game
    });
}
spliceBrowse();
// Open filter mb
const toggleFilerMb = () => {
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
toggleFilerMb();
