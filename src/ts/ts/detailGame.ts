// splide
function spliceDetail(): any {
  document.addEventListener("DOMContentLoaded", function () {
    //Hero section
    const splideDetail = new Splide("#main-carousel-detail", {
      type: "loop",
      pagination: false,
      classes: {
        arrows: "splide__arrows main-detail-arrows",
        arrow: "splide__arrow main-detail-arrow",
      },
    });

    const thumbnails = document.getElementsByClassName("thumb-detail");
    let current: any;

    for (let i = 0; i < thumbnails.length; i++) {
      initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail: any, index: any) {
      thumbnail.addEventListener("click", function () {
        splideDetail.go(index);
      });
    }

    splideDetail.on("mounted move", function () {
      const thumbnail = thumbnails[splideDetail.index];

      if (thumbnail) {
        if (current) {
          current.classList.remove("is-active");
        }

        thumbnail.classList.add("is-active");
        current = thumbnail;
      }
    });
    splideDetail.mount();

    new Splide("#thumbnail-carousel-detail", {
      type: "loop",
      fixedWidth: 100,
      fixedHeight: 60,
      rewind: true,
      pagination: false,
      perPage: 5,
      classes: {
        arrows: "splide__arrows detail-thumb-arrows",
        arrow: "splide__arrow detail-thumb-arrow",
      },
    }).mount();
  });
}
spliceDetail();
