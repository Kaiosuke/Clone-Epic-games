//  Render header

// Toggle menu
const body: any = document.querySelector("body");
const $: any = document.querySelector.bind(document);

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
  const searchSection = $(".section-search");
  if (window.screenY > 1) searchSection?.classList.add("scroll");
  window.addEventListener("scroll", () => {
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
