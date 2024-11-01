function splice() {
    document.addEventListener("DOMContentLoaded", function () {
        //Hero section
        const splide = new Splide("#main-carousel", {
            pagination: {
                el: ".splide__pagination",
                length: 4,
            },
            autoplay: true,
            interval: 5000,
        });
        const thumbnails = document.getElementsByClassName("thumbnail");
        let current;
        for (let i = 0; i < thumbnails.length; i++) {
            initThumbnail(thumbnails[i], i);
        }
        function initThumbnail(thumbnail, index) {
            thumbnail.addEventListener("click", function () {
                splide.go(index);
            });
        }
        splide.on("mounted move", function () {
            const thumbnail = thumbnails[splide.index];
            if (thumbnail) {
                if (current) {
                    current.classList.remove("is-active");
                }
                thumbnail.classList.add("is-active");
                current = thumbnail;
            }
        });
        splide.mount();
        // Discovery
        const splideDiscover = new Splide("#splice-discover", {
            type: "loop",
            perPage: 5,
            pagination: 0,
            gap: 16,
            breakpoints: {
                1024: {
                    perPage: 4,
                },
                768: {
                    perPage: 1,
                    padding: "20%",
                },
            },
        });
        splideDiscover.mount();
        // Halloween
        const splideHalloween = new Splide("#splice-halloween", {
            type: "loop",
            perPage: 5,
            pagination: 0,
            gap: 16,
            breakpoints: {
                1024: {
                    perPage: 4,
                },
                768: {
                    perPage: 1,
                    padding: "20%",
                },
            },
        });
        splideHalloween.mount();
        // Gifts
        const splideGifts = new Splide("#splice-gifts", {
            type: "loop",
            perPage: 4,
            pagination: 0,
            gap: 16,
            breakpoints: {
                1024: {
                    perPage: 4,
                },
                768: {
                    perPage: 2,
                    padding: "20%",
                },
                640: {
                    perPage: 1,
                    padding: "10%",
                },
            },
        });
        splideGifts.mount();
    });
}
export default splice;
