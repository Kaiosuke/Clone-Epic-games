// @ts-ignore
import { getData } from "../js/apiRequest.js";
import { formatMoney } from "../js/main.js";
import search from "../js/search.js";
import { cartList, handleAddToCart } from "./cart.js";
import { handleAddWishlist } from "./wishList.js";
let wishlists = [];
const getWishlist = () => {
    wishlists = JSON.parse(localStorage.getItem("wishlists") || "[]");
};
getWishlist();
const url = "https://api-games-three.vercel.app";
const getGameList = async () => {
    const data = await getData(url, "games");
    renderBanner(data);
    renderDiscover(data);
    renderHalloween(data);
    renderGiftGame(data);
    splideHome();
};
getGameList();
const renderHome = () => {
    const rootElement = document.querySelector(".root");
    const main = document.createElement("main");
    main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-[99999]">
     
      </section>
      <!-- End section-search -->
      <section class="pt-[100px]">
      <div class="container m-auto flex mt-4 md:mt-0">
        <section
          id="main-carousel"
          class="splide md:flex-[1_0_auto] md:w-[70%]"
          aria-label="My Awesome Gallery"
        >
          <div class="splide__track">
            <ul class="splide__list banner">
             
            </ul>
          </div>
        </section>

        <ul
          id="thumbnails"
          class="thumbnails grow flex-col h-full overflow-y-auto overflow-x-hidden gap-5 lg:ml-16 md:ml-6 2xl:max-h-[580px] xl:max-h-[480px] lg:max-h-[370px] md:max-h-[270px] md:flex hidden"
        >
   
        </ul>
        </div>
      </section>
      <!-- End banner -->

      <section class="section-discover pt-16">
        <div class="container m-auto">
          <div class="discover-head">
            <a class="flex items-center gap-4 md:text-xl text-base" href="#!">
              <h2 class="md:text-xl text-base">Discover Something New</h2>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <!-- End discover head -->

          <div class="discover-main pt-4">
            <div
              id="splice-discover"
              class="splide"
              role="group"
              aria-label="Splide Basic HTML Example"
            >
              <div class="splide__track">
                <ul class="discover splide__list">
              
                </ul>
              </div>
            </div>
          </div>
          <!-- End discovery main -->
        </div>
        <!-- End main -->
      </section>
      <!-- End discover section-->

      <section class="section-halloween pt-16">
        <div class="container m-auto">
          <div class="halloween-head">
            <a class="flex items-center gap-4 md:text-xl text-base" href="#!">
              <h2 class="md:text-xl text-base">Halloween Spotlight</h2>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <!-- End halloween head -->

          <div class="halloween-main pt-4">
            <div
              id="splice-halloween"
              class="splide"
              role="group"
              aria-label="Splide Basic HTML Example"
            >
              <div class="splide__track">
                <ul class="halloween splide__list">
                
                </ul>
              </div>
            </div>
          </div>
          <!-- End halloween main -->
        </div>
      </section>
      <!-- End halloween section -->

      <section class="section-deals pt-16">
        <div class="container m-auto">
          <div
            class="deals-main sm:grid md:grid-cols-3 gap-4 sm:grid-cols-2 flex flex-nowrap overflow-x-auto"
          >
            <div class="flex-[1_0_100%]">
              <a href="#" class="recommender-img group/plus">
                <img
                  class="rounded-lg"
                  src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/286690/capsule_616x353.jpg?t=1725363906"
                  alt=""
                />
                <div
                  class="absolute top-2 right-4 z-30 hidden group-hover/plus:block group/addWishlist"
                >
                  <i class="aaaa text-lg fa-solid fa-circle-plus"></i>
                  <div
                    class="absolute py-2 bg-primary w-40 text-center hidden group-hover/addWishlist:block"
                  >
                    Add to Wishlist
                  </div>
                </div>
              </a>
              <div class="pt-4">
                <a href="#!">
                  <h3 class="lg:text-xl text-lg font-bold">Metro Exodus</h3>
                </a>
                <div class="pt-6 flex items-center gap-4">
                  <span
                    class="lg:text-base text-sm py-0.1 px-1.5 text-black rounded-xl bg-secondary"
                  >
                    -80%
                  </span>
                  <span class="line-through lg:text-base text-sm opacity-25">
                    &517.500
                  </span>
                  <span class="lg:text-base text-sm"> &103.500 </span>
                </div>
              </div>
            </div>
            <div class="flex-[1_0_100%]">
              <a href="#" class="recommender-img group/plus">
                <img
                  src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/286690/capsule_616x353.jpg?t=1725363906"
                  alt=""
                />
                <div
                  class="absolute top-2 right-4 z-30 hidden group-hover/plus:block group/addWishlist"
                >
                  <i class="aaaa text-lg fa-solid fa-circle-plus"></i>
                  <div
                    class="absolute py-2 bg-primary w-40 text-center hidden group-hover/addWishlist:block"
                  >
                    Add to Wishlist
                  </div>
                </div>
              </a>
              <div class="pt-4">
                <a href="#!">
                  <h3 class="lg:text-xl text-lg font-bold">Metro Exodus</h3>
                </a>
                <div class="pt-6 flex items-center gap-4">
                  <span
                    class="lg:text-base text-sm py-0.1 px-1.5 text-black rounded-xl bg-secondary"
                  >
                    -80%
                  </span>
                  <span class="line-through lg:text-base text-sm opacity-25">
                    &517.500
                  </span>
                  <span class="lg:text-base text-sm"> &103.500 </span>
                </div>
              </div>
            </div>
            <div class="flex-[1_0_100%]">
              <a href="#" class="recommender-img group/plus">
                <img
                  src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/286690/capsule_616x353.jpg?t=1725363906"
                  alt=""
                />
                <div
                  class="absolute top-2 right-4 z-30 hidden group-hover/plus:block group/addWishlist"
                >
                  <i class="aaaa text-lg fa-solid fa-circle-plus"></i>
                  <div
                    class="absolute py-2 bg-primary w-40 text-center hidden group-hover/addWishlist:block"
                  >
                    Add to Wishlist
                  </div>
                </div>
              </a>
              <div class="pt-4">
                <a href="#!">
                  <h3 class="lg:text-xl text-lg font-bold">Metro Exodus</h3>
                </a>
                <div class="pt-6 flex items-center gap-4">
                  <span
                    class="lg:text-base text-sm py-0.1 px-1.5 text-black rounded-xl bg-secondary"
                  >
                    -80%
                  </span>
                  <span class="line-through lg:text-base text-sm opacity-25">
                    &517.500
                  </span>
                  <span class="lg:text-base text-sm"> &103.500 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End deals section -->

      <section class="seaction-banner pt-16">
        <div class="container m-auto">
          <div class="banner-main grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <a class="recommender-img" href="#!">
                <img
                  class="rounded-lg"
                  src="https://cdn2.unrealengine.com/en-pegi-egs-mobile-qr-code-breaker-1-1920x1080-d7985d4087d4.jpg?resize=1&w=854&h=480&quality=medium"
                  alt="banner"
                />
              </a>
            </div>
            <div>
              <a class="recommender-img" href="#!">
                <img
                  class="rounded-lg"
                  src="https://cdn2.unrealengine.com/en-pegi-egs-mobile-qr-code-breaker-1-1920x1080-d7985d4087d4.jpg?resize=1&w=854&h=480&quality=medium"
                  alt="banner"
                />
              </a>
            </div>
          </div>
          <!-- End banner main -->
        </div>
      </section>
      <!-- End section banner -->

      <section class="section-gifts pt-16">
        <div class="container m-auto">
          <div class="bg-third p-6 rounded-lg">
            <div class="gifts-head flex items-center">
              <div class="gifts-title flex items-center gap-4">
                <div>
                  <i class="fa-solid fa-gift lg:text-2xl text-xl"></i>
                </div>
                <h2 class="lg:text-xl text-lg font-bold">Free Games</h2>
              </div>
              <!-- End gifts title -->
              <a
                href="#!"
                class="gifts-more ml-auto px-4 py-2 border border-b-white rounded-lg hover-primary"
              >
                <div>View More</div>
              </a>
              <!-- End gifts more -->
            </div>
            <!-- End gifts head -->
            <div class="gifts-main">
              <div class="gifts-main pt-4">
                <div
                  id="splice-gifts"
                  class="splide"
                  role="group"
                  aria-label="Splide Basic HTML Example"
                >
                  <div class="splide__track">
                    <ul class="gift splide__list">
                
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- End gifts main -->
          </div>
        </div>
      </section>
      <!-- End section free game -->
  `;
    rootElement?.appendChild(main);
    main.querySelector(".section-search")?.appendChild(search());
};
renderHome();
// Render banner
const renderBanner = (arr) => {
    const banner = document.querySelector(".banner");
    if (banner) {
        banner.innerHTML = "";
    }
    const thumbnailsElement = document.querySelector("#thumbnails");
    for (let [k, v] of Object.entries(arr)) {
        const { id, title, poster, description, images, thumbnails } = v;
        const li = document.createElement("li");
        li.className = "splide__slide";
        li.innerHTML = `
        <a class="relative z-20" href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}">
          <div class="overlay-img">
            <img
              class="md:w-full h-auto"
              src=${images[0]}
              alt=${title}
            />
          </div>
        </a>
        <div
          class="absolute bottom-0 left-0 z-50 p-5 flex flex-col lg:gap-7 gap-3"
        >
          <h3 class="text-2xl">${title}</h3>
          <span class="lg:text-lg text-sm">
            ${description}
          </span>
          <div class="flex items-center justify-start gap-5">
            <div class="btn-add-cart">
            </div>
            <button
              class="btn-add-wishlist flex items-center gap-2 justify-center lg:px-10 lg:py-2.5 px-4 py-1 rounded-xl hover-third text-base lg:text-xl"
            >
   
            </button>
          </div>
      </div>
    `;
        banner?.appendChild(li);
        const li2 = document.createElement("li");
        li2.className =
            "thumbnail flex w-full cursor-pointer gap-10 items-center mr-6";
        li2.innerHTML = `
      <a
        href="#!"
        class="flex items-center gap-4 bg-third py-3 pl-2 pr-20 rounded-xl"
      >
        <div class="lg:w-16 w-12">
          <img
            class="w-full"
            src=${poster}
            alt=${title}
          />
        </div>
        <span class=" lg:text-base text-sm">
          ${title}
        </span>
      </a>
    `;
        thumbnailsElement?.appendChild(li2);
        // Render add
        const renderBtnAdd = () => {
            const cartBtn = li.querySelector(".btn-add-cart");
            if (cartBtn) {
                const cartId = cartList.map((cart) => cart.id);
                const checkGame = () => {
                    if (cartId.includes(id)) {
                        return true;
                    }
                    return false;
                };
                cartBtn.innerHTML = "";
                cartBtn.innerHTML = `
    ${checkGame()
                    ? `
        <a href="/src/views/pages/cart/cart.html" class="bg-white text-black lg:px-10 lg:py-2.5 px-4 py-1 rounded-xl text-base lg:text-xl hover-primary">
         View to Cart
        </a>
        `
                    : `   
        <button class="add-game bg-white text-black lg:px-10 lg:py-2.5 px-4 py-1 rounded-xl text-base lg:text-xl hover-primary">
          Add to Cart
        </button>
      `}
  
    `;
                li.querySelector(".add-game")?.addEventListener("click", () => {
                    addGame(v);
                });
            }
        };
        renderBtnAdd();
        // Const add game
        const addGame = (v) => {
            handleAddToCart(v);
            renderBtnAdd();
        };
        // Render wishlist
        const renderWishlist = () => {
            const wishlistBtn = li.querySelector(".btn-add-wishlist");
            if (wishlistBtn) {
                const wishlistIds = wishlists.map((wishlist) => wishlist.id);
                const checkGame = () => {
                    if (wishlistIds.includes(id)) {
                        return true;
                    }
                    return false;
                };
                wishlistBtn.innerHTML = "";
                wishlistBtn.innerHTML = `
    ${checkGame()
                    ? `
          <a href='/src/views/pages/wishList/wishList.html' class='flex items-center gap-2'>
             <div  class="w-6 h-6">
              <i class="fa-solid fa-eye"></i>
            </div>
            <span> View to Wishlist </span>
          </a>
        `
                    : `   
        <div class='add-wishlist flex items-center gap-2'>
          <div class="w-6 h-6 border-2 border-white rounded-full flex justify-center items-center">
            <i class="fa-solid fa-plus"></i>
          </div>
          <span> Add to Wishlist </span>
        </div>
      `}
  
    `;
                li.querySelector(".add-wishlist")?.addEventListener("click", () => {
                    addWishlist(v);
                });
            }
        };
        renderWishlist();
        // Const add wishlist
        const addWishlist = (v) => {
            handleAddWishlist(v);
            getWishlist();
            renderWishlist();
        };
    }
};
// Render discover
const renderDiscover = (arr) => {
    const discover = document.querySelector(".discover");
    for (let [k, v] of Object.entries(arr)) {
        const { id, title, poster, genre, discount, price } = v;
        const li = document.createElement("li");
        li.className = "splide__slide";
        li.innerHTML = `
    <a href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}">
      <div class="recommender-img relative group/plus">
        <img
          class="rounded-lg relative"
          src=${poster}
          alt=${title}
        />
      </div>
      <div class="flex flex-col gap-2">
        <span class="opacity-25">${genre}</span>
        <h3 class="lg:text-lg text-base font-medium">
          ${title}
        </h3>
        <span class="lg:text-base text-sm">${formatMoney(price)}</span>
      </div>
    </a>
    `;
        discover?.appendChild(li);
    }
};
const renderHalloween = (arr) => {
    const halloween = document.querySelector(".halloween");
    for (let [k, v] of Object.entries(arr)) {
        const { id, title, poster, genre, discount, price } = v;
        const li = document.createElement("li");
        li.className = "splide__slide";
        li.innerHTML = `
    <a href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}">
      <div class="recommender-img relative group/plus">
        <img
          class="rounded-lg relative"
          src=${poster}
          alt=${title}
        />
      </div>
      <div class="flex flex-col gap-2">
        <span class="opacity-25">${genre}</span>
        <h3 class="lg:text-lg text-base font-medium">
          ${title}
        </h3>
        <span class="lg:text-base text-sm">${formatMoney(price)}</span>
      </div>
    </a>
    `;
        halloween?.appendChild(li);
    }
};
const renderGiftGame = (arr) => {
    const freeGame = document.querySelector(".gift");
    for (let [k, v] of Object.entries(arr)) {
        const { id, title, poster, genre, discount, price } = v;
        const li = document.createElement("li");
        li.className = "splide__slide";
        li.innerHTML = `
        <a href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}">
          <div class="recommender-img relative group/plus">
            <img
              class="rounded-lg relative"
              src=${poster}
              alt=${title}
            />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="lg:text-lg text-base font-medium">
             ${title}
            </h3>
            <span class="lg:text-base text-sm">Free now</span>
  
            </div>
        </a>
    `;
        freeGame?.appendChild(li);
    }
};
// Splide
const splideHome = () => {
    //Hero section
    const splide = new Splide("#main-carousel", {
        // type: "loop",
        autoplay: true,
        // interval: 5000,
        classes: {
            arrows: "splide__arrows hero-arrows",
            arrow: "splide__arrow hero-arrow",
        },
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
        autoplay: true,
        interval: 4000,
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
        autoplay: true,
        interval: 3500,
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
        autoplay: true,
        interval: 5000,
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
};
