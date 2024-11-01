import splice from "./splice.js";
// Toggle menu
splice();
const body = document.querySelector("body");
const $ = document.querySelector.bind(document);
const toggleMenu = () => {
    const headerMenu = $(".header-menu");
    const closeMenu = $(".close-menu");
    const rsHeaderMenu = $(".rs-header-menu");
    headerMenu === null || headerMenu === void 0 ? void 0 : headerMenu.addEventListener("click", () => {
        rsHeaderMenu === null || rsHeaderMenu === void 0 ? void 0 : rsHeaderMenu.classList.add("active-bar");
        body === null || body === void 0 ? void 0 : body.classList.add("overlay");
    });
    closeMenu === null || closeMenu === void 0 ? void 0 : closeMenu.addEventListener("click", () => {
        rsHeaderMenu === null || rsHeaderMenu === void 0 ? void 0 : rsHeaderMenu.classList.remove("active-bar");
        body === null || body === void 0 ? void 0 : body.classList.remove("overlay");
    });
};
toggleMenu();
// Toggle bar
const toggleBar = () => {
    const headerBar = $(".header-bar");
    const closeBar = $(".close-header-bar");
    const mbBar = $(".mb-bar");
    headerBar === null || headerBar === void 0 ? void 0 : headerBar.addEventListener("click", () => {
        mbBar === null || mbBar === void 0 ? void 0 : mbBar.classList.add("active-bar");
        body === null || body === void 0 ? void 0 : body.classList.add("overlay");
    });
    closeBar === null || closeBar === void 0 ? void 0 : closeBar.addEventListener("click", () => {
        mbBar === null || mbBar === void 0 ? void 0 : mbBar.classList.remove("active-bar");
        body === null || body === void 0 ? void 0 : body.classList.remove("overlay");
    });
};
toggleBar();
//Toggle search
const toggleSearch = () => {
    const toggleSearch = document.querySelector(".toggle-search");
    const iconSearch = document.querySelector(".icon-search");
    const closeSearch = document.querySelector(".close-search");
    iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.addEventListener("click", () => {
        toggleSearch === null || toggleSearch === void 0 ? void 0 : toggleSearch.classList.add("search-active");
        body === null || body === void 0 ? void 0 : body.classList.add("overlay");
    });
    closeSearch === null || closeSearch === void 0 ? void 0 : closeSearch.addEventListener("click", () => {
        toggleSearch === null || toggleSearch === void 0 ? void 0 : toggleSearch.classList.remove("search-active");
        body === null || body === void 0 ? void 0 : body.classList.remove("overlay");
    });
};
toggleSearch();
