import { formatMoney } from "../js/main.js";
import { handleAddToCart } from "./cart.js";
import search from "../js/search.js";
import { updateData, getData } from "./apiRequest.js";
import { getUser } from "./helper.js";
const url = "https://api-games-three.vercel.app";
const urlUser = "http://localhost:3000";
const getGameList = async () => {
    await getData(url, "games");
    const user = getUser();
    renderWishlist();
    renderQUantityGame();
    toggleFilerWishListMb();
    if (user) {
        renderWishlistItems(user.wishlists);
    }
    else {
        renderWishlistItems([]);
    }
};
getGameList();
// Render wishList
const renderWishlist = () => {
    const root = document.querySelector(".root-wishlist");
    const main = document.createElement("main");
    main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-[99999]">
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
          <div class="wrapper-wish-list flex pt-4 justify-between">
            <div class="lg:flex-[1_0_100%] flex-[1_0_100%]">

              <!-- End game-arrange -->
              <div class="wrapper-wish-list-items flex flex-col justify-between gap-4 pt-4">
               
              </div>
            </div>
            <!-- End list-game -->
          </div>
          <!-- End wrapper-wish-list -->
        </div>
      </section>
  `;
    root?.appendChild(main);
};
// Render quantity game
const renderQUantityGame = () => {
    const sectionSearch = document.querySelector(".section-search");
    if (sectionSearch)
        sectionSearch.innerHTML = "";
    sectionSearch?.appendChild(search());
};
// Render wishlist item
const renderWishlistItems = (arr) => {
    const wrapperWishlist = document.querySelector(".wrapper-wish-list-items");
    if (wrapperWishlist)
        wrapperWishlist.innerHTML = "";
    if (wrapperWishlist && (arr.length < 1 || !arr)) {
        wrapperWishlist.innerHTML = `   
      <div class="container m-auto">
        <div
          class="text-center cart-empty flex flex-col items-center justify-center gap-6"
        >
          <img
            class="md:w-1/5 w-1/3"
            src="/src/media/images/cart-nothing.webp"
            alt="cart nothing"
          />
          <h1 class="font-bold md:text-2xl text-xl">Your wishlist is empty</h1>
          <a
            href="/src/views/pages/browse/browse.html"
            class="py-1.5 px-3 font-medium bg-secondary lg:text-xl text-base rounded-lg hover-primary"
          >
            Shop for Games
          </a>
        </div>
      </div>
   `;
    }
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
            <span class="font-bold lg:text-xl md:text-base text-sm">${formatMoney(price)}</span>
          </div>
          <h2 class="font-bold lg:text-2xl text-xl pt-2">
            <a
              class="hover:underline"
              href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}"
            >
              ${title}
            </a>
          </h2>
          <div class="flex items-center gap-2 md:pt-8 pt-4">
            <div
              class="w-6 h-6 rounded-full flex justify-center items-center bg-[#f5d462]"
            >
              <i class="fa-solid fa-trophy text-sm"></i>
            </div>
            <span class="text-[#f5d462] md:text-base text-sm"> Earn 5% back in Epic Rewards </span>
          </div>
          <div class="md:pt-8 pt-4 flex items-center md:gap-4 gap-2">
            <span class="md:text-base text-sm">Self-Refundable</span>
            <i class="fa-regular fa-circle-question"></i>
          </div>
        </div>
        <!-- End wish-list-detail -->
      </div>
      <div class="pt-3 flex items-center justify-between">
        <i class="fa-brands fa-windows opacity-70"></i>
        <div class="flex items-center gap-6">
          <span
            class="md:text-base text-sm delete-wishlist opacity-70 cursor-pointer font-semibold hover:opacity-100"
          >
            Remove
          </span>
          <div class="md:text-base text-sm btn-add-cart">
  
          </div>
        </div>
      </div>
    `;
        wrapperWishlist?.appendChild(div);
        div.querySelector(".delete-wishlist")?.addEventListener("click", () => {
            handleDeleteWishlist2(arr, id);
        });
        const renderBtnCart = () => {
            const btnCart = div.querySelector(".btn-add-cart");
            if (btnCart) {
                btnCart.innerHTML = "";
                const user = getUser();
                if (user) {
                    const cartIds = user.cartList.map((cart) => cart.id);
                    const checkGame = () => {
                        if (cartIds.includes(id)) {
                            return true;
                        }
                        return false;
                    };
                    btnCart.innerHTML = `
      ${!checkGame()
                        ? `
         <a class="add-to-cart opacity-70 cursor-pointer font-semibold hover:opacity-100">
              Add to Cart
          </a>
          `
                        : `   
          <a href="/src/views/pages/cart/cart.html" class="opacity-70 cursor-pointer font-semibold hover:opacity-100">
              View to Cart
          </a>
        `}
      `;
                    btnCart
                        .querySelector(".add-to-cart")
                        ?.addEventListener("click", () => {
                        addToCart(v);
                    });
                }
            }
        };
        renderBtnCart();
        // add to cart
        const addToCart = (game) => {
            handleAddToCart(game);
            renderBtnCart();
        };
    }
};
// Handle add to wishlist
const handleAddWishlist = (game) => {
    const { id, title, poster, price } = game;
    const wishlist = {
        id,
        title,
        poster,
        price,
    };
    const user = getUser();
    if (user) {
        const wishlists = user.wishlists;
        wishlists.push(wishlist);
        const dataList = {
            wishlists: wishlists,
        };
        updateData(urlUser, "users", dataList, user.id);
        renderQUantityGame();
    }
};
// handle deleteWishlist
const handleDeleteWishlist = (id) => {
    const user = getUser();
    if (user) {
        const wishlists = user.wishlists;
        const newWishList = wishlists.filter((game) => game.id !== id);
        const dataList = {
            wishlists: newWishList,
        };
        updateData(urlUser, "users", dataList, user.id);
        renderQUantityGame();
    }
};
// handle deleteWishlist2
const handleDeleteWishlist2 = (arr, id, content = null) => {
    if (!content) {
        content = "Remove this game from your wishlist?";
    }
    const isConfirm = confirm(`Are you sure you want to ${content}`);
    const user = getUser();
    if (!isConfirm)
        return;
    if (user) {
        const newWishList = arr.filter((game) => game.id !== id);
        const dataList = {
            wishlists: newWishList,
        };
        updateData(urlUser, "users", dataList, user.id);
        renderWishlistItems(newWishList);
        renderQUantityGame();
    }
    return true;
};
// Open filter wishlist mb
const toggleFilerWishListMb = () => {
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
export { handleAddWishlist, handleDeleteWishlist };
