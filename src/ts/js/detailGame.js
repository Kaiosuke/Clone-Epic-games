import { formatMoney } from "../js/main.js";
import { getData } from "../js/apiRequest.js";
import search from "../js/search.js";
import { handleAddToCart, cartList } from "./cart.js";
import { handleAddWishlist, wishlists } from "./wishList.js";
const gameList = [];
const url = "https://api-games-three.vercel.app";
const urlParams = new URLSearchParams(window.location.search);
const idGame = urlParams.get("id");
const getGameList = async () => {
    const data = await getData(url, "games");
    gameList.push(...data);
    renderDetailGame(data);
    renderBtnAdd();
    renderWishlist();
    spliceDetail();
};
getGameList();
// Render detail game
const renderDetailGame = (arr) => {
    const root = document.querySelector(".root");
    const main = document.createElement("main");
    const findGame = arr.find((game) => game.id === Number(idGame));
    if (findGame) {
        const { id, title, images, thumbnails, price, evaluate, logo, description, publisher, developer, release_date, } = findGame;
        main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-[99999]">
   
      </section>

      <section class="section-detail-game pt-20">
        <div class="container m-auto">
          <div class="detail-head">
            <h1 class="font-bold md:text-5xl lg:text-4xl text-3xl">
                ${title}
            </h1>
            <div class="evaluate pt-4">
              
            </div>
          </div>
          <div class="detail-main pt-6">
            <div
              class="flex md:flex-row flex-col-reverse justify-between lg:gap-10 md:gap-4 gap-12"
            >
              <div
                class="detail-images flex-[0_0_auto] md:max-w-[70%] max-w-[100%]"
              >
                <section
                  id="main-carousel-detail"
                  class="splide"
                  aria-label="My Awesome Gallery"
                >
                  <div class="splide__track">
                    <ul class="detail-banner splide__list">
                  
               
                    </ul>
                  </div>
                </section>

                <section
                  id="thumbnail-carousel-detail"
                  class="splide pt-4 flex xl:w-[500px] lg:w-[420px] md:w-[320px] w-[calc(100%-100px)] m-auto"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div class="splide__track overflow-hidden">
                    <ul class="detail-thumbnail splide__list flex gap-2">
                
                    </ul>
                  </div>
                </section>
                <div class="pt-10 lg:text-xl text-lg">
                 <p>${description}</p>
                </div>
              </div>
              <!-- End detail-image -->
              <div class="detail-description flex flex-col">
                <div class="game-logo flex justify-center">
                  <img
                    class="w-2/3"
                    src=${logo}
                    alt=${title}
                  />
                </div>
                <!-- End game logo -->
                <div
                  class="base-Game p-2 bg-cl-third w-fit rounded-lg lg:text-base text-sm"
                >
                  Base game
                </div>
                <div class="pt-4 font-bold lg:text-2xl text-lg">
                ${formatMoney(price)}
                </div>
                <div class="group-btn-detail pt-4 flex flex-col gap-2.5">
                  <div
                    class="lg:py-4 py-3 font-medium bg-secondary rounded-lg text-primary flex justify-center cursor-pointer recommender-img lg:text-base text-sm"
                  >
                    Buy Now
                  </div>
                    <div class="btn-add-cart ">
            
                    </div>
                    <div class="btn-wishlist">
                    </div>
                </div>
                <div class="group-detail-des pt-4">
                  <ul>
                    <li class="flex items-center justify-between">
                      <span class="opacity-70 lg:text-base text-sm">Publisher</span
                      <span class="lg:text-base text-sm">${publisher}</span>
                    </li>
                    <div class="line-stretch-2"></div>
                    <li class="flex items-center justify-between">
                      <span class="opacity-70 lg:text-base text-sm">Developer</span
                      <span class="lg:text-base text-sm">${developer}</span>
                    </li>
                    <div class="line-stretch-2"></div>
                    <li class="flex items-center justify-between">
                      <span class="opacity-70 lg:text-base text-sm">Release Date</span>
                      <span class="lg:text-base text-sm">${release_date}</span>
                    </li>
                    <div class="line-stretch-2"></div>
                    <li class="flex items-center justify-between">
                      <span class="opacity-70 lg:text-base text-sm">Platform</span>
                      <span><i class="fa-brands fa-windows lg:text-2xl text-xl"></i></span>
                    </li>
                    <div class="line-stretch-2"></div>
                  </ul>
                </div>
                <div
                  class="group-btn-share pt-4 flex items-center justify-between lg:gap-4 gap-2"
                >
                  <a
                    href="#!"
                    class="py-2 w-1/2 bg-cl-third flex justify-center rounded-md items-center gap-2 lg:text-base text-sm font-bold recommender-img cursor-pointer"
                  >
                    <i class="fa-solid fa-share-nodes"></i>
                    Share
                  </a>
                  <a
                    href="#!"
                    class="py-2 w-1/2 bg-cl-third flex justify-center rounded-md items-center gap-2 lg:text-base text-sm font-bold recommender-img cursor-pointer"
                  >
                    <i class="fa-solid fa-flag"></i>
                    Report
                  </a>
                </div>
              </div>
              <!-- End detail-description -->
            </div>
          </div>
          <!-- End detail-main -->
        </div>
      </section>
      <!-- End section detail game -->
  `;
        root?.appendChild(main);
        main.querySelector(".section-search")?.appendChild(search());
        // Render evaluate
        for (let i = 0; i < evaluate; i++) {
            const span = document.createElement("span");
            span.innerHTML = `
      <span><i class="fa-solid fa-star"></i></span>
      `;
            main.querySelector(".evaluate")?.appendChild(span);
        }
        for (let [k, v] of Object.entries(images)) {
            const li = document.createElement("li");
            li.className = "splide__slide";
            li.innerHTML = `
      <img
        class="rounded-lg"
        src=${v}
        alt=${title}
      /> 
      `;
            main.querySelector(".detail-banner")?.appendChild(li);
        }
        for (let [k, v] of Object.entries(thumbnails)) {
            const li = document.createElement("li");
            li.className =
                "splide__slide thumb-detail recommender-img cursor-pointer";
            li.innerHTML = `                
            <img
              class="rounded-lg h-full"
              src=${v}
              alt=${title}
            />
      `;
            main.querySelector(".detail-thumbnail")?.appendChild(li);
        }
    }
};
// Cart
const renderBtnAdd = () => {
    const cartBtn = document.querySelector(".btn-add-cart");
    if (cartBtn) {
        const cartId = cartList.map((cart) => cart.id);
        const findGame = gameList.find((game) => game.id === Number(idGame));
        const checkGame = () => {
            if (cartId.includes(findGame.id)) {
                return true;
            }
            return false;
        };
        cartBtn.innerHTML = "";
        cartBtn.innerHTML = `
    ${checkGame()
            ? `
      <a href="/src/views/pages/cart/cart.html" class="lg:py-4 py-3 font-medium rounded-lg bg-cl-third flex justify-center cursor-pointer recommender-img lg:text-base text-sm">
          View to Cart
      </a>
        `
            : `   
      <div class="add-game lg:py-4 py-3 font-medium rounded-lg bg-cl-third flex justify-center cursor-pointer recommender-img lg:text-base text-sm">
          Add To Cart
      </div>`}
   
    `;
        document.querySelector(".add-game")?.addEventListener("click", () => {
            addGame(findGame);
        });
    }
};
// Const add game
const addGame = (game) => {
    handleAddToCart(game);
    renderBtnAdd();
};
const renderQuantityGame = () => {
    const sectionSearch = document.querySelector(".section-search");
    if (sectionSearch)
        sectionSearch.innerHTML = "";
    sectionSearch?.appendChild(search());
};
renderQuantityGame();
// wishlist
const renderWishlist = () => {
    const wishlistBtn = document.querySelector(".btn-wishlist");
    if (wishlistBtn) {
        const cartId = wishlists.map((cart) => cart.id);
        const findGame = gameList.find((game) => game.id === Number(idGame));
        const checkGame = () => {
            if (cartId.includes(findGame.id)) {
                return true;
            }
            return false;
        };
        wishlistBtn.innerHTML = "";
        wishlistBtn.innerHTML = `
    ${checkGame()
            ? `
      <a href="/src/views/pages/wishList/wishList.html" class="lg:py-4 py-3 font-medium rounded-lg bg-cl-third flex justify-center cursor-pointer recommender-img lg:text-base text-sm">
          View to Wishlist
      </a>
        `
            : `   
      <div class="add-wishlist lg:py-4 py-3 font-medium rounded-lg bg-cl-third flex justify-center cursor-pointer recommender-img lg:text-base text-sm">
          Add To Wishlist
      </div>`}
   
    `;
        document.querySelector(".add-wishlist")?.addEventListener("click", () => {
            addWishlist(findGame);
        });
    }
};
// Const add game
const addWishlist = (game) => {
    handleAddWishlist(game);
    renderWishlist();
};
// splide
function spliceDetail() {
    //Hero section
    const splideDetail = new Splide("#main-carousel-detail", {
        type: "loop",
        pagination: false,
        autoplay: true,
        interval: 5000,
        classes: {
            arrows: "splide__arrows main-detail-arrows",
            arrow: "splide__arrow main-detail-arrow",
        },
    });
    const thumbnails = document.getElementsByClassName("thumb-detail");
    let current;
    for (let i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }
    function initThumbnail(thumbnail, index) {
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
        autoplay: true,
        interval: 5000,
        pagination: false,
        perPage: 5,
        classes: {
            arrows: "splide__arrows detail-thumb-arrows",
            arrow: "splide__arrow detail-thumb-arrow",
        },
    }).mount();
}
