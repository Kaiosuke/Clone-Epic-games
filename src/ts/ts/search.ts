import { getData } from "./apiRequest.js";
import { getUser } from "./helper.js";

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

const urlPathname = window.location.pathname;
const checkPage = (page: string): boolean => {
  if (urlPathname.includes(page)) {
    return true;
  }
  return false;
};

const url = "https://api-games-three.vercel.app";

const search = (arr: any): any => {
  const div = document.createElement("div");
  div.className = "container m-auto";
  div.innerHTML = `
        <div class="py-6 flex items-center justify-between">
            <div class="flex items-center gap-5 group">
              <div class="wrapper-search">
                  <input
                    class="input-search px-4 py-2 pl-10 bg-cl-third outline-none rounded-full placeholder:text-gray-400 placeholder:text-sm"
                    type="text"
                    value=""
                    placeholder="Search store"
                  />
                  <i
                    class="fa-solid fa-magnifying-glass text-white absolute left-4 bottom-1/2 translate-y-1/2 text-sm"
                  ></i>
                  <i
                    class="fa-solid fa-xmark close-search md:hidden block text-white absolute -right-6 bottom-1/2 translate-y-1/2 text-base"
                  ></i>
                  <div class="absolute top-12 left-0">
                    <div class="search-list bg-cl-third flex flex-col w-[160%] lg:h-[300px] md:h-[240px] h-[200px] overflow-y-auto">
 
                    </div>
                  </div>
                </div>
              <i class="icon-search fa-solid fa-magnifying-glass block md:hidden"></i>


              <ul class="wrapper-menu flex items-center gap-x-5 group">
                <li class="hidden md:block">
                  <a
                    class="hover-second ${
                      checkPage("index") ? "text-white" : "text-[#929294]"
                    }  relative flex items-center gap-2"
                    href="/index.html"
                  >
                    Discovery
                  </a>
                </li>
                <li class="block md:hidden">
                  <input
                    type="checkbox"
                    class="hidden group"
                    id="toggleDiscovery"
                  />
                  <a
                    class="hover-primary relative flex items-center gap-2"
                    href="#!"
                  >
                    Menu
                    <label
                      for="toggleDiscovery"
                      class="block md:hidden cursor-pointer"
                    >
                      <i class="fa-solid fa-chevron-down"></i>
                    </label>
                    <ul
                      class="hidden absolute w-32 h-auto bg-primary z-20 p-2 group-focus-within:block"
                    >
                      <li class="py-2">
                        <a class="${
                          checkPage("index") ? "text-white" : "text-[#929294]"
                        }" href="/index.html">Discover</a>
                      </li>
                      <li class="py-2">
                        <a class="${
                          checkPage("browse") ? "text-white" : "text-[#929294]"
                        }" href="/src/views/pages/browse/browse.html">Browser</a>
                      </li>
                      <li class="py-2">
                        <a class="${
                          checkPage("news") ? "text-white" : "text-[#929294]"
                        }" href="/src/views/pages/news/news.html">News</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li class="hidden md:block">
                  <a class="hover-second ${
                    checkPage("browse") ? "text-white" : "text-[#929294]"
                  }" href="/src/views/pages/browse/browse.html">Browser</a>
                </li>
                <li class="hidden md:block">
                  <a
                    class="${
                      checkPage("news") ? "text-white" : "text-[#929294]"
                    } hover-second"
                    href="/src/views/pages/news/news.html"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>

            <ul class="flex items-center gap-4">
              <li class="lg:block hidden">
                <a class="${
                  checkPage("wishList") ? "text-white" : "text-[#929294]"
                }" href="/src/views/pages/wishList/wishList.html"> Wishlist </a>
              </li>
              <li class="lg:block hidden relative">
                <a class="${
                  checkPage("cart") ? "text-white" : "text-[#929294]"
                }" href="/src/views/pages/cart/cart.html">Cart </a>
             <div class="quantity-cart-pc">
              
             </div>
              </li>
              <li class="lg:hidden block">
                <a class="check-wishlist ${
                  checkPage("wishList") ? "text-white" : "text-[#929294]"
                }" href="/src/views/pages/wishList/wishList.html">
                    <i class="fa-regular fa-circle-check text-xl"></i>
                  </a>
                </li>
                <li class="lg:hidden block relative">
                  <a class="text-white" href="/src/views/pages/cart/cart.html">
                    <i class="${
                      checkPage("cart") ? "text-white" : "text-[#929294]"
                    } fa-solid fa-cart-shopping text-xl"></i>
                    <div class="quantity-cart-mb">
                    
                    </div>
                    </div>
                </a>    
              </li>
            </ul>
          </div>
    `;
  renderQuantity(arr);
  handleSearch(div);
  toggleSearch(div);
  return div;
};

export default search;

const renderQuantity = async (arr: any): Promise<any> => {
  await getData(url, "games");
  const user: any = getUser();
  const quantityCartMb = document.querySelector(".quantity-cart-mb");

  if (quantityCartMb) {
    quantityCartMb.innerHTML = `
         ${
           user && user.cartList.length > 0
             ? `  <div
                      class="absolute -top-3 -right-4 w-5 h-5 rounded-full ${
                        checkPage("cart") ? "bg-white" : "bg-[#929294]"
                      } text-black flex items-center justify-center text-sm"
                    >
                      ${arr ? arr.length : user && user.cartList.length}
                    </div>`
             : ""
         }
    `;
  }
  const quantityCartPC = document.querySelector(".quantity-cart-pc");
  if (quantityCartPC) {
    quantityCartPC.innerHTML = `
      ${
        user && user.cartList.length > 0
          ? `  <div class="absolute -top-3 -right-4 ${
              checkPage("cart") ? "bg-white" : "bg-[#929294]"
            } w-5 h-5 rounded-full text-black flex items-center justify-center text-sm">
                ${arr ? arr.length : user && user.cartList.length}
              </div>`
          : ""
      }   
    `;
  }
};

// search

const renderSearchList = (
  arr: GamesItem[],
  value: string,
  element: any
): any => {
  const games = arr.filter((game) =>
    game.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  element.innerHTML = "";
  if (games.length < 1) {
    element.innerHTML = `<div class="py-2.5 px-4">
      No games found
    </div>`;
  }
  if (value === "") {
    element.classList.remove("active-block");
  }
  games.forEach((game) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <a class=" py-2.5 px-4 hover:underline flex items-center gap-4" href="/src/views/pages/browse/detailGame/detailGame.html?id=${game.id}">
         <img
           class="w-[40px]"
           src=${game.poster}
           alt=${game.title}
         />
         <h2 class="">${game.title}</h2>
       </a>
    `;
    element.appendChild(div);
  });
};

const handleSearch = async (div: HTMLElement): Promise<any> => {
  const data = await getData(url, "games");
  const inputSearch = div.querySelector(".input-search");
  const searchList = div.querySelector(".search-list");

  inputSearch?.addEventListener("input", (e: any) => {
    searchList?.classList.add("active-block");
    renderSearchList(data, e.target.value, searchList);
  });
  inputSearch?.addEventListener("focus", (e: any) => {
    if (e.target.value !== "") {
      searchList?.classList.add("active-block");
      renderSearchList(data, e.target.value, searchList);
    }
  });
  inputSearch?.addEventListener("blur", () => {
    setTimeout(() => {
      searchList?.classList.remove("active-block");
    }, 200);
  });
};

//Toggle search
const toggleSearch = (div: HTMLElement): any => {
  const wrapperSearch = div.querySelector(".wrapper-search");
  const iconSearch = div.querySelector(".icon-search");
  const closeSearch = div.querySelector(".close-search");
  const wrapperMenu = div.querySelector(".wrapper-menu");
  iconSearch?.addEventListener("click", () => {
    wrapperSearch?.classList.add("active-block", "active");
    iconSearch?.classList.add("active-hidden");
    wrapperMenu?.classList.add("active-hidden");
  });
  closeSearch?.addEventListener("click", () => {
    wrapperSearch?.classList.remove("active-block", "active");
    iconSearch?.classList.remove("active-hidden");
    wrapperMenu?.classList.remove("active-hidden");
  });
};
