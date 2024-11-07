import { cartList } from "./cart.js";

const search = (): any => {
  const div = document.createElement("div");
  div.className = "container m-auto";
  div.innerHTML = `
        <div class="py-6 flex items-center justify-between">
            <div class="flex items-center gap-5 group">
              <div class="relative hidden md:block">
                <input
                  class="px-4 py-2 pl-10 bg-cl-third outline-none rounded-full placeholder:text-gray-400 placeholder:text-sm"
                  type="text"
                  value=""
                  placeholder="Search store"
                />
                <i
                  class="fa-solid fa-magnifying-glass text-white absolute left-4 bottom-1/2 translate-y-1/2 text-sm"
                ></i>
              </div>

              <i class="icon-search fa-solid fa-magnifying-glass"></i>
              <div
                class="w-[98%] absolute h-20 top-0 z-20 toggle-search hidden s"
              >
                <input
                  class="w-full h-full bg-primary outline-none pl-4"
                  type="text"
                  placeholder="Search store"
                />
                <div
                  class="close-search absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <i class="fa-solid fa-xmark text-xl"></i>
                </div>
              </div>

              <ul class="flex items-center gap-x-5 group">
                <li class="hidden md:block">
                  <a
                    class="hover-second opacity-70 relative flex items-center gap-2"
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
                        <a href="/index.html">Discover</a>
                      </li>
                      <li class="py-2">
                        <a href="/src/views/pages/browse/browse.html">Browser</a>
                      </li>
                      <li class="py-2">
                        <a href="/src/views/pages/news/news.html">News</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li class="hidden md:block">
                  <a class="hover-second" href="/src/views/pages/browse/browse.html">Browser</a>
                </li>
                <li class="hidden md:block">
                  <a
                    class="opacity-70 hover-second"
                    href="/src/views/pages/news/news.html"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>

            <ul class="flex items-center gap-4">
              <li class="lg:block hidden">
                <a href="/src/views/pages/wishList/wishList.html"> Wishlist </a>
              </li>
              <li class="lg:block hidden relative">
                <a href="/src/views/pages/cart/cart.html">Cart </a>
             <div>
              ${
                cartList.length > 0
                  ? `  <div
                  class="absolute -top-3 -right-4 w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-sm"
                >
                  ${cartList.length}
                </div>`
                  : ""
              }
             </div>
              </li>
              <li class="lg:hidden block">
                <a href="/src/views/pages/wishList/wishList.html">
                  <i class="fa-regular fa-circle-check text-xl"></i>
                </a>
              </li>
              <li class="lg:hidden block relative">
                <a href="/src/views/pages/cart/cart.html">
                  <i class="fa-solid fa-cart-shopping text-xl"></i>
                 <div>
                ${
                  cartList.length > 0
                    ? `  <div
                    class="absolute -top-3 -right-4 w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-sm"
                  >
                    ${cartList.length}
                  </div>`
                    : ""
                }
                 </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
    `;
  return div;
};

export default search;
