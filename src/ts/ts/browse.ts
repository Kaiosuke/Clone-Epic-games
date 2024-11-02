// Splide
function spliceBrowse(): any {
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

const toggleFilerMb = (): any => {
  const body = document.querySelector("body");
  const filterMain = document.querySelector(".wrapper-filter");
  const filterBtn = document.querySelector(".game-right");
  const closeFilter = document.querySelector(".close-filter");
  filterBtn?.addEventListener("click", () => {
    filterMain?.classList.add("search-active");
    body?.classList.add("overlay");
    body;
  });
  closeFilter?.addEventListener("click", () => {
    filterMain?.classList.remove("search-active");
    body?.classList.remove("overlay");
  });
};

toggleFilerMb();
