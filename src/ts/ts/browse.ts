import { getData } from "../js/apiRequest.js";
import { formatMoney } from "../js/main.js";
import search from "../js/search.js";
const url = "https://api-games-three.vercel.app";

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
interface GenresItem {
  id: number;
  title: string;
  thumbnail: string;
}

const getGameList = async (): Promise<any> => {
  const data = await getData(url, "games");
  renderGameList(data);
};
getGameList();

const getGameGenreList = async (): Promise<any> => {
  const data = await getData(url, "genres");
  renderGenres(data);
  spliceBrowse();
};
getGameGenreList();
const renderBrowse = (): any => {
  const root = document.querySelector(".root");
  const main = document.createElement("main");
  main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-50">
   
      </section>
      <!-- End search -->
      <section class="section-popular pt-20">
        <div class="container m-auto">
          <div class="popular-head">
            <h2 class="lg:text-2xl text-xl font-bold">Popular Genres</h2>
          </div>
          <!-- End popular-head -->
          <div class="popular-main pt-4">
            <div
              id="splice-popular"
              class="splide"
              role="group"
              aria-label="Splide Basic HTML Example"
            >
              <div class="splide__track">
                <ul class="popular-list splide__list">
           
                </ul>
              </div>
            </div>
          </div>
          <!-- End popular main -->
        </div>
      </section>
      <!-- End section-popular -->

      <section class="section-games pt-16">
        <div class="container m-auto">
          <div class="wrapper-games flex">
            <div
              class="list-game lg:flex-[1_0_auto] lg:max-w-[80%] flex-[1_0_100%]"
            >
              <div class="game-arrange flex items-center justify-between">
                <div class="game-left flex items-center gap-4">
                  <span class="font-medium lg:text-base text-sm opacity-25">
                    Show:
                  </span>
                  <div>
                    <select name="" id="" class="bg-primary">
                      <option value="all" selected>All</option>
                      <option value="new-release">New Release</option>
                      <option value="coming-soon">Coming Soon</option>
                      <option value="high-low">Price: High to Low</option>
                      <option value="low-high">Price: Low to High</option>
                    </select>
                  </div>
                  <a href="./detailGame/detailGame.html" class="text-red-600"
                    >Detail</a
                  >
                </div>
                <div class="game-right">
                  <div
                    class="font-medium lg:text-xl text-base cursor-pointer flex items-center gap-2 lg:hidden py-1.5 px-3 bg-cl-third rounded-lg"
                  >
                    Filter(1)
                    <i class="fa-solid fa-layer-group"></i>
                  </div>
                </div>
              </div>
              <!-- End game-arrange -->
              <div
                class="game-main grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-col-2 pt-4 gap-4"
              >
            
              </div>
              <!-- End game main -->
            </div>
            <!-- End list-game -->
            <div class="list-filters ml-4 md:flex-[0_1_20%] relative">
              <div
                class="wrapper-filter lg:static fixed top-0 right-0 w-[100vw] h-[100vh] md:w-[50vw] lg:bg-primary lg:w-auto lg:h-auto bg-cl-third z-[99999] lg:p-0 p-10 overflow-y-auto"
              >
                <div class="filter-head items-center justify-between lg:flex">
                  <span class="font-medium lg:text-xl text-base">
                    Filters(1)
                  </span>
                  <span
                    class="text-secondary cursor-pointer text-sm lg:block hidden"
                  >
                    Reset
                  </span>
                </div>
                <div class="filter-main">
                  <div class="filter-input mt-4 mb-4 relative">
                    <input
                      class="bg-third outline-none px-6 py-2 hover-four w-full"
                      type="text"
                      placeholder="Key word"
                    />
                    <div class="absolute left-1 top-1/2 -translate-y-1/2">
                      <i
                        class="fa-solid fa-magnifying-glass opacity-25 text-sm"
                      ></i>
                    </div>
                  </div>
                  <div class="line-stretch-2"></div>
                  <div class="filter-genre">
                    <input
                      type="checkbox"
                      class="peer hidden"
                      id="open-genre"
                    />
                    <label
                      for="open-genre"
                      class="flex items-center justify-between py-3 cursor-pointer opacity-60 hover-second"
                    >
                      Genre
                      <i
                        class="fa-solid fa-chevron-down peer-checked:hidden"
                      ></i>
                    </label>
                    <ul class="hidden peer-checked:block">
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer bg-cl-third hover:bg-cl-third transition-all flex items-center justify-between"
                      >
                        Action
                        <i class="fa-solid fa-check"></i>
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Adventure
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Card Game
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Fantasy
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Indie
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Open World
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Space
                      </li>
                    </ul>
                  </div>
                  <!-- End filter-genre -->
                  <div class="line-stretch-2"></div>
                  <div class="filter-features group">
                    <input
                      type="checkbox"
                      class="peer hidden"
                      id="open-features"
                    />
                    <label
                      for="open-features"
                      class="flex items-center justify-between py-3 cursor-pointer opacity-60 hover-second"
                    >
                      Features
                      <i
                        class="fa-solid fa-chevron-down peer-checked:hidden"
                      ></i>
                    </label>
                    <ul class="hidden peer-checked:block">
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer bg-cl-third hover:bg-cl-third transition-all flex items-center justify-between"
                      >
                        Co-op
                        <i class="fa-solid fa-check"></i>
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Multiplayer
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Online multiplayer
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        MMO
                      </li>
                    </ul>
                  </div>
                  <!-- End filter-features -->
                  <div class="line-stretch-2"></div>
                  <div class="filter-types relative group">
                    <input
                      type="checkbox"
                      class="peer hidden"
                      id="open-types"
                    />
                    <label
                      for="open-types"
                      class="flex items-center justify-between py-3 cursor-pointer opacity-60 hover-second"
                    >
                      Types
                      <i
                        class="fa-solid fa-chevron-down peer-checked:hidden"
                      ></i>
                    </label>
                    <ul class="hidden peer-checked:block">
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer bg-cl-third hover:bg-cl-third transition-all flex items-center justify-between"
                      >
                        Experience
                        <i class="fa-solid fa-check"></i>
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Game
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Game Bundle
                      </li>
                      <li
                        class="opacity-60 py-3 px-3 cursor-pointer hover:bg-cl-third transition-all"
                      >
                        Game Demo
                      </li>
                    </ul>
                  </div>
                  <!-- End filter-types -->
                  <div class="line-stretch-2"></div>
                  <div
                    class="group-btn-filter pt-4 lg:hidden flex items-center justify-evenly gap-2"
                  >
                    <div
                      class="close-filter p-3 px-14 border border-white bg-cl-third cursor-pointer rounded-lg font-semibold"
                    >
                      Clear
                    </div>
                    <div
                      class="p-3 px-14 border border-transparent bg-secondary cursor-pointer rounded-lg font-semibold text-black"
                    >
                      Apply
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End list-filters -->
          </div>
          <!-- End wrapper-games -->
        </div>
      </section>
      <!-- End section games -->
  `;
  root?.appendChild(main);
  main.querySelector(".section-search")?.appendChild(search());
};
renderBrowse();

// Render genres
const renderGenres = (arr: GenresItem[]): any => {
  const popularList = document.querySelector(".popular-list");
  for (let [k, v] of Object.entries(arr)) {
    const { id, title, thumbnail } = v;
    const li = document.createElement("li");

    li.className = "splide__slide";
    li.innerHTML = `
      <div class="p-4 bg-third rounded-lg">
        <a class="flex flex-col" href="#!">
          <div class="recommender-img relative">
            <img
              class="relative shadow-2xl shadow-primary"
              src=${thumbnail}"
              alt= ${title}
            />
          </div>
          <h3
            class="text-center lg:text-lg text-base font-semibold pt-4"
          >
            ${title}
          </h3>
        </a>
      </div>
    `;
    popularList?.appendChild(li);
  }
};

const renderGameList = (arr: GamesItem[]): any => {
  const gameList = document.querySelector(".game-main");
  for (let [k, v] of Object.entries(arr)) {
    const {
      id,
      title,
      poster,
      description,
      images,
      thumbnails,
      discount,
      price,
    } = v;
    const div = document.createElement("div");
    div.innerHTML = `
    <a href="#" class="recommender-img group/plus">
      <img
        class="rounded-lg"
        src=${poster}
        alt=${title}
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
        <h3 class="lg:text-xl text-lg font-bold">${title}</h3>
      </a>
      <div class="pt-6 flex items-center gap-4">
        <span
          class="lg:text-base text-sm py-0.1 px-1.5 text-black rounded-xl bg-secondary"
        >
          -${discount}
        </span>

        <span class="lg:text-base text-sm"> ${formatMoney(price)} </span>
      </div>
    </div>
    `;

    gameList?.appendChild(div);
  }
};

// Splide
function spliceBrowse(): any {
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
}

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
