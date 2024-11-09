import header from "../js/header.js";
import footer from "../js/footer.js";

// Toggle menu
const body: any = document.querySelector("body");
const $: any = document.querySelector.bind(document);

const root = document.querySelector(".root");
const rootCart = document.querySelector(".root-cart");
const rootWishlist = document.querySelector(".root-wishlist");

// Render header
root?.parentNode?.insertBefore(header(), root);
rootCart?.parentNode?.insertBefore(header(), rootCart);
rootWishlist?.parentNode?.insertBefore(header(), rootWishlist);

// Render Footer
setTimeout(() => {
  root?.insertAdjacentElement("afterend", footer());
  rootCart?.insertAdjacentElement("afterend", footer());
  rootWishlist?.insertAdjacentElement("afterend", footer());
}, 300);

const toggleMenu = (): void => {
  const headerMenu = $(".header-menu");
  const closeMenu = $(".close-menu");
  const rsHeaderMenu = $(".rs-header-menu");
  headerMenu?.addEventListener("click", () => {
    rsHeaderMenu?.classList.add("active-bar");
    body?.classList.add("overlay");
  });
  closeMenu?.addEventListener("click", () => {
    rsHeaderMenu?.classList.remove("active-bar");
    body?.classList.remove("overlay");
  });
};
toggleMenu();

// Toggle bar
const toggleBar = (): void => {
  const headerBar = $(".header-bar");
  const closeBar = $(".close-header-bar");
  const mbBar = $(".mb-bar");
  headerBar?.addEventListener("click", () => {
    mbBar?.classList.add("active-bar");
    body?.classList.add("overlay");
  });
  closeBar?.addEventListener("click", () => {
    mbBar?.classList.remove("active-bar");
    body?.classList.remove("overlay");
  });
};
toggleBar();

//Toggle search
const toggleSearch = (): any => {
  const toggleSearch = document.querySelector(".toggle-search");
  const iconSearch = document.querySelector(".icon-search");
  const closeSearch = document.querySelector(".close-search");
  iconSearch?.addEventListener("click", () => {
    toggleSearch?.classList.add("search-active");
    body?.classList.add("overlay");
  });
  closeSearch?.addEventListener("click", () => {
    toggleSearch?.classList.remove("search-active");
    body?.classList.remove("overlay");
  });
};
toggleSearch();

// Search scroll

const searchScroll = (): any => {
  // if (window.screenY > 1) searchSection?.classList.add("scroll");
  window.addEventListener("scroll", () => {
    const searchSection = $(".section-search");
    if (window.scrollY > 1) {
      searchSection?.classList.add("scroll");
    } else {
      searchSection?.classList.remove("scroll");
    }
  });
};

searchScroll();

// Scroll to top
const scrollToTop = () => {
  const scrollElement = $(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollElement?.classList.add("active-block");
    } else {
      scrollElement?.classList.remove("active-block");
    }
  });

  scrollElement?.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

scrollToTop();

// Format money vn

const formatMoney = (money: number): string => {
  return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

export { formatMoney };
