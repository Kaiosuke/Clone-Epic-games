import { formatMoney } from "../js/main.js";
import { handleAddToCart, cartList } from "./cart.js";
import search from "../js/search.js";
import { getData } from "../js/apiRequest.js";

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

interface CartsItem {
  id: number | string;
  title: string;
  poster: string;
  price: number;
}

interface WishlistItems {
  id: number | string;
  title: string;
  poster: string;
  price: number;
}

const gameList: GamesItem[] = [];

const url = "https://api-games-three.vercel.app";

const urlParams = new URLSearchParams(window.location.search);

const getGameList = async (): Promise<any> => {
  const data = await getData(url, "games");
  gameList.push(...data);
  // renderWishlist();
};
getGameList();

let wishlists: WishlistItems[] = [];

const getWishlist = () => {
  wishlists = JSON.parse(localStorage.getItem("wishlists") || "[]");
};
getWishlist();

// Render wishList
const renderWishlist = (): any => {
  const root = document.querySelector(".root-wishlist");
  const main = document.createElement("main");
  main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-[9999999999]">
      
      </section>
      <!-- End section-search -->

      <section class="section-wish-list pt-16">
        <div class="container m-auto">
          <div class="wish-list-head flex items-center justify-between">
            <h1 class="font-bold md:text-5xl lg:text-4xl text-3xl">
              My Wish List
            </h1>
            <div class="flex items-center gap-4">
              <span class="lg:text-2xl text-xl">
                <i class="fa-solid fa-sack-dollar"></i>
              </span>
              <span
                class="block lg:text-lg text-base py-1.5 px-3 border border-white rounded-lg"
              >
                $60.000.000
              </span>
            </div>
          </div>
          <div class="wrapper-wish-list flex pt-10 justify-between">
            <div class="lg:flex-[1_0_80%] flex-[1_0_100%]">
              <div class="game-arrange flex items-center justify-between">
                <div class="game-left flex items-center gap-4">
                  <span class="font-medium lg:text-base text-sm opacity-25">
                    Sort by:
                  </span>
                  <div>
                    <select name="" id="" class="bg-primary">
                      <option value="all" selected>On Sale</option>
                      <option value="high-low">Price: High to Low</option>
                      <option value="low-high">Price: Low to High</option>
                    </select>
                  </div>
                  <a href="./detailGame/detailGame.html" class="text-red-600">
                    Detail
                  </a>
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
              <div class="wrapper-wish-list-items flex flex-col justify-between gap-4 pt-4">
               
              </div>
            </div>
            <!-- End list-game -->
            <div class="list-filters ml-4 lg:flex-[0_0_20%] relative">
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
          <!-- End wrapper-wish-list -->
        </div>
      </section>
  `;
  root?.appendChild(main);
};
renderWishlist();

// Render quantity game
const renderQUantityGame = (): any => {
  const sectionSearch = document.querySelector(".section-search");
  if (sectionSearch) sectionSearch.innerHTML = "";
  sectionSearch?.appendChild(search());
};
renderQUantityGame();

// Render wishlist item

const renderWishlistItems = (arr: WishlistItems[]): any => {
  const wrapperWishlist = document.querySelector(".wrapper-wish-list-items");
  if (wrapperWishlist) wrapperWishlist.innerHTML = "";
  for (let [k, v] of Object.entries(arr.reverse())) {
    const { id, title, poster, price } = v;
    const div = document.createElement("div");
    div.className = "bg-cl-third p-5 rounded-lg mb-6 w-full";
    div.innerHTML = `
        <div class="wrapper-wish-list-images flex gap-4">
          <a 
        href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}"
        class="wish-list-thumb flex-[0_0_auto] max-w-[20%]">
          <img
            src=${poster}
            alt=${title}
          />
        </a>
        <!-- End wish-list-thumb -->
        <div class="wish-list-detail w-full">
          <div class="flex items-center justify-between">
            <div
              class="base-Game px-2 py-1 bg-cl-four w-fit rounded-lg lg:text-base text-sm text-white"
            >
              Base game
            </div>
            <span class="font-bold lg:text-xl text-base">${formatMoney(
              price
            )}</span>
          </div>
          <h2 class="font-bold lg:text-2xl text-xl pt-2">
            <a
              class="hover:underline"
              href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}"
            >
              ${title}
            </a>
          </h2>
          <div class="flex items-center gap-2 pt-8">
            <div
              class="w-6 h-6 rounded-full flex justify-center items-center bg-[#f5d462]"
            >
              <i class="fa-solid fa-trophy text-sm"></i>
            </div>
            <span class="text-[#f5d462]"> Earn 5% back in Epic Rewards </span>
          </div>
          <div class="pt-8 flex items-center gap-4">
            <span>Self-Refundable</span>
            <i class="fa-regular fa-circle-question"></i>
          </div>
        </div>
        <!-- End wish-list-detail -->
      </div>
      <div class="pt-3 flex items-center justify-between">
        <i class="fa-brands fa-windows opacity-70"></i>
        <div class="flex items-center gap-6">
          <span
            class="delete-wishlist opacity-70 cursor-pointer font-semibold hover:opacity-100"
          >
            Remove
          </span>
          <span
            class="add-to-cart opacity-70 cursor-pointer font-semibold hover:opacity-100"
          >
            Move to cart
          </span>
        </div>
      </div>
    `;
    wrapperWishlist?.appendChild(div);

    div.querySelector(".delete-wishlist")?.addEventListener("click", () => {
      handleDeleteWishlist2(arr, id);
    });
    // add to cart
    div.querySelector(".add-to-cart")?.addEventListener("click", () => {
      addToCart(arr, v, id);
    });
  }
};
renderWishlistItems(wishlists);

// Handle add to whishlist
const handleAddWishlist = (game: WishlistItems): any => {
  const { id, title, poster, price } = game;
  const wishlist: WishlistItems = {
    id,
    title,
    poster,
    price,
  };
  wishlists.push(wishlist);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  renderQUantityGame();
};

// handle deleteWishlist
const handleDeleteWishlist = (id: number | string): any => {
  const newWishList = wishlists.filter((game) => game.id !== id);
  localStorage.setItem("wishlists", JSON.stringify(newWishList));
  renderQUantityGame();
};

// handle deleteWishlist2
const handleDeleteWishlist2 = (
  arr: WishlistItems[],
  id: number | string,
  content: string | null = null
): any => {
  if (!content) {
    content = "remove this game from your wishlist?";
  }
  const isConfirm = confirm(`Are you sure you want to ${content}`);
  if (!isConfirm) return;
  const newWishList = arr.filter((game) => game.id !== id);
  localStorage.setItem("wishlists", JSON.stringify(newWishList));
  renderWishlistItems(newWishList);
  renderQUantityGame();
  return true;
};

// Cart
const addToCart = (
  arr: WishlistItems[],
  game: any,
  id: number | string
): any => {
  const isAdd = handleDeleteWishlist2(arr, id, "add this game to cart");
  if (isAdd) {
    handleAddToCart(game);
  }
};

// Open filter wishklist mb
const toggleFilerWishListMb = (): any => {
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

toggleFilerWishListMb();

export { handleAddWishlist, wishlists, handleDeleteWishlist };
