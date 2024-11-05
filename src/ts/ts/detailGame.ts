import { formatMoney } from "../js/main.js";
import { getData } from "../js/apiRequest.js";
import search from "../js/search.js";
import { handleAddToCart } from "./cart.js";
import { cartList } from "./cart.js";

interface GamesItem {
  id: number | string;
  title: string;
  poster: string;
  images: string[];
  thumbnails: string[];
  price: number;
  evaluate: number;
  logo: string;
  description: string;
  genre: string;
  feature: string;
  publisher: string;
  developer: string;
  release_date: string;
  type: string;
  discount: string;
}

const gameList: GamesItem[] = [];

const url = "https://api-games-three.vercel.app";
const getGameList = async (): Promise<any> => {
  const data = await getData(url, "games");
  gameList.push(...data);
  renderDetailGame(data);
  spliceDetail();
};
getGameList();

// Render detail game
const renderDetailGame = (arr: GamesItem[]): any => {
  const root = document.querySelector(".root");
  const main = document.createElement("main");
  const urlParams = new URLSearchParams(window.location.search);
  const idGame = urlParams.get("id");
  const findGame: GamesItem | undefined = arr.find(
    (game) => game.id === Number(idGame)
  );
  if (findGame) {
    const {
      id,
      title,
      poster,
      images,
      thumbnails,
      price,
      evaluate,
      logo,
      description,
      genre,
      feature,
      publisher,
      developer,
      release_date,
      type,
      discount,
    } = findGame;

    main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-50">
   
      </section>

      <section class="section-detail-game pt-20">
        <div class="container m-auto">
          <div class="detail-head">
            <h1 class="font-bold md:text-5xl lg:text-4xl text-3xl">
              The Witcher 3: Wild Hunt – Complete Edition
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
                  <div
                    class="btn-add-cart lg:py-4 py-3 font-medium rounded-lg bg-cl-third flex justify-center cursor-pointer recommender-img lg:text-base text-sm"
                  >
                    Add To Cart
                  </div>
                  <div
                    class="lg:py-4 py-3 font-medium rounded-lg bg-cl-third flex justify-center cursor-pointer recommender-img lg:text-base text-sm"
                  >
                    Add to Wishlist
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
    main.querySelector(".btn-add-cart")?.addEventListener("click", () => {
      handleAddToCart(findGame);
    });
  }
};

console.log(cartList);

// splide
function spliceDetail(): any {
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
