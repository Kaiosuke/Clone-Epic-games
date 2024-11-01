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

    const splideGames = new Splide("#splice-games", {
      type: "loop",
      perPage: 4,
      //   pagination: 0,
      gap: 16,

      breakpoints: {
        1024: {
          perPage: 4,
        },
        768: {
          perPage: 2,
        },
      },
    });
    splideGames.mount();
  });
}
spliceBrowse();
