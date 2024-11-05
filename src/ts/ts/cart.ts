import { formatMoney } from "../js/main.js";
import search from "../js/search.js";

interface CartsItem {
  id: number | string;
  title: string;
  poster: string;
  price: number;
}

let cartList: CartsItem[] = [];

const getCartList = () => {
  cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
};
getCartList();
const handleSumMoney = (arr: CartsItem[]): string => {
  const totalMoney = arr.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  return formatMoney(totalMoney);
};

// render cart
const renderCart = (): any => {
  const root = document.querySelector(".root-cart");
  const main = document.createElement("main");
  if (main) main.innerHTML = "";
  main.innerHTML = `
      ${
        cartList.length > 0
          ? `
      <section class="section-search fixed bg-primary w-full z-50">
        
      </section>
        `
          : ``
      }
      <!-- End section-search -->
      <section class="section-cart">
        <div class="container m-auto">
            ${
              cartList.length < 1
                ? `
          <div class="text-center cart-empty flex flex-col items-center justify-center gap-6">
            <img
              class="md:w-1/5 w-1/3"
              src="/src/media/images/cart-nothing.webp"
              alt="cart nothing"
            />
            <h1 class="font-bold md:text-2xl text-xl">
              Your cart is empty
            </h1>
            <a
              href="/src/views/pages/browse/browse.html"
              class="py-1.5 px-3 font-medium bg-secondary lg:text-xl text-base rounded-lg hover-primary"
            >
              Shop for Games
            </a>
          </div>
          <!-- End cart-empty -->
            `
                : `
      <section class="section-cart-game pt-20">
            <div class="container m-auto">
              <div class="cart-head flex items-center justify-between">
                <h1 class="font-bold md:text-5xl lg:text-4xl text-3xl">
                  My Cart
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
              <div class="cart-main pt-6">
                <div
                  class="flex md:flex-row flex-col justify-between lg:gap-10 md:gap-4 gap-12"
                >
                  <div
                    class="cart-images flex-[1_0_auto] md:max-w-[70%] max-w-[100%] h-fit"
                  >
                
                  </div>

                  <!-- End cart-image -->
                  <div
                    class="cart-description flex-[1_0_auto] md:max-w-[30%] max-w-[100%] h-fit"
                  >
                    <div class="flex flex-col">
                      <h3 class="font-bold lg:text-3xl text-2xl">Games</h3>
                      <div class="group-money pt-8">
                        <ul class="bill">
               
                        </ul>
                        <div
                          class="open-check-out btn-check-out mt-6 text-black lg:py-4 py-3 bg-secondary flex justify-center font-semibold rounded-lg cursor-pointer hover-five"
                        >
                          Check Out
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End cart-description -->
                </div>
              </div>
              <!-- End cart-main -->
            </div>
          </section>
          <!-- End section cart game -->
          `
            }
        </div>
      </section>
      <!-- End section-cart -->

      <div class="check-out">
        <div
          class="fixed top-0 bottom-0 xl:w-[80%] w-full xl:left-[10%] right-auto bg-white z-[99999999999] md:overflow-hidden overflow-y-auto"
        >
          <div class="flex sm:flex-row flex-col">
            <div
              class="flex-[1_0_auto] md:max-w-[70%] sm:max-w-[50%] max-w[100%] p-6"
            >
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium lg:text-xl text-lg">
                  CHECKOUT
                </span>
                <span class="flex items-center gap-2 text-secondary">
                  <i class="fa-solid fa-user"></i>
                  <span>Kaio</span>
                  <span
                    class="close-check-out text-primary lg:text-2xl text-xl cursor-pointer sm:hidden block"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </span>
              </div>
              <div class="line-stretch"></div>
              <div class="rewards">
                <span class="text-primary lg:text-xl text-lg">
                  EPIC REWARDS
                </span>
                <div
                  class="py-3.5 px-5 bg-[#f7f7f7] rounded flex items-center gap-4 mt-4"
                >
                  <i class="fa-solid fa-trophy text-secondary"></i>
                  <span class="text-primary opacity-70 lg:text-xl text-lg">
                    Epic Rewards
                  </span>
                </div>
              </div>
              <div class="pay-method pt-4">
                <span class="text-primary lg:text-xl text-lg pt-4">
                  Other Payment Methods
                  <div class="pay-card pt-4 cursor-pointer">
                    <div
                      class="py-3.5 px-5 bg-[#f7f7f7] rounded flex items-center gap-4"
                    >
                      <span
                        class="w-5 h-5 border border-secondary rounded-full"
                      >
                      </span>
                      <div
                        class="w-16 h-10 flex items-center justify-center border border-cl-four rounded"
                      >
                        <i
                          class="fa-regular fa-credit-card lg:text-2xl text-xl"
                        ></i>
                      </div>
                      <span class="text-primary opacity-70 lg:text-xl text-lg">
                        Credit Card
                      </span>
                    </div>
                  </div>
                  <div class="pay-paypal pt-2 cursor-pointer">
                    <div
                      class="py-3.5 px-5 bg-[#f7f7f7] rounded flex items-center gap-4"
                    >
                      <span
                        class="w-5 h-5 border border-secondary rounded-full"
                      >
                      </span>
                      <div
                        class="w-16 h-10 flex items-center justify-center border border-cl-four rounded"
                      >
                        <i class="fa-brands fa-paypal lg:text-2xl text-xl"></i>
                      </div>
                      <span class="text-primary opacity-70 lg:text-xl text-lg">
                        PayPal
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div
              class="bg-[#f2f2f2] flex-[1_0_auto] md:max-w-[30%] sm:max-w[50%] max-w-full h-[100vh] relative"
            >
              <div class="px-6 pt-6 pb-[240px] h-[100%] overflow-y-auto w-full">
                <div class="flex items-center justify-between">
                  <span class="text-red-600 font-semibold">ORDER SUMMARY</span>
                  <span
                    class="close-check-out text-primary lg:text-2xl text-xl cursor-pointer sm:block hidden"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </div>

                <div class="flex flex-col gap-4">
                  <div class="flex pt-4 gap-2 items-center">
                    <img
                      class="w-[100px] rounded"
                      src="https://cdn1.epicgames.com/spt-assets/0432328c147947ce8ac177a88ce06cc0/rogue-waters-fkag9.jpg?resize=1&w=360&h=480&quality=medium"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <h2
                        class="lg:text-lg text-base text-primary font-semibold"
                      >
                        Rogue Waters
                      </h2>
                      <span class="text-primary opacity-70">
                        Tripwire Interactive
                      </span>
                      <span class="text-primary opacity-80"> ₫313,000 </span>
                    </div>
                  </div>
                  <div class="flex pt-4 gap-2 items-center">
                    <img
                      class="w-[100px] rounded"
                      src="https://cdn1.epicgames.com/spt-assets/0432328c147947ce8ac177a88ce06cc0/rogue-waters-fkag9.jpg?resize=1&w=360&h=480&quality=medium"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <h2
                        class="lg:text-lg text-base text-primary font-semibold"
                      >
                        Rogue Waters
                      </h2>
                      <span class="text-primary opacity-70">
                        Tripwire Interactive
                      </span>
                      <span class="text-primary opacity-80"> ₫313,000 </span>
                    </div>
                  </div>
                  <div class="flex pt-4 gap-2 items-center">
                    <img
                      class="w-[100px] rounded"
                      src="https://cdn1.epicgames.com/spt-assets/0432328c147947ce8ac177a88ce06cc0/rogue-waters-fkag9.jpg?resize=1&w=360&h=480&quality=medium"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <h2
                        class="lg:text-lg text-base text-primary font-semibold"
                      >
                        Rogue Waters
                      </h2>
                      <span class="text-primary opacity-70">
                        Tripwire Interactive
                      </span>
                      <span class="text-primary opacity-80"> ₫313,000 </span>
                    </div>
                  </div>
                </div>

                <div class="pt-4">
                  <div class="flex items-center justify-between">
                    <span class="text-primary opacity-80 lg:text-lg text-base">
                      Price
                    </span>
                    <span class="text-primary opacity-80 lg:text-lg text-base">
                      ₫313,000
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-primary opacity-80 lg:text-lg text-base">
                      VAT included if applicable
                    </span>
                    <span class="text-primary opacity-80 lg:text-lg text-base">
                    </span>
                  </div>
                </div>
                <div class="line-stretch-2"></div>
                <div class="flex items-center justify-between">
                  <span
                    class="text-primary opacity-80 lg:text-lg text-base font-bold"
                  >
                    Total
                  </span>
                  <span
                    class="text-primary opacity-80 lg:text-lg text-base font-bold"
                  >
                    ₫313,000
                  </span>
                </div>
                <div class="pt-4">
                  <input
                    class="py-2 px-4 w-full text-primary outline-none rounded border border-cl-[#f2f2f2] active:border-primary focus:border-primary"
                    type="text"
                    name=""
                    placeholder="Enter your code"
                    id=""
                  />
                </div>
                <div class="text-center pt-4">
                  <span class="text-primary"> Need Help? </span>
                  <a class="text-secondary underline" href="#!"> Contact Us </a>
                </div>
              </div>
              <div class="absolute bottom-0 bg-[#f2f2f2] p-6 shadow-first">
                <div>
                  <p class="text-primary text-sm">
                    By clicking "Place Order" below, I represent that I am over
                    18 and an authorized user of this payment method, I agree to
                    the
                  </p>
                  <a class="text-secondary underline text-sm" href="#!">
                    End User License Agreement.</a
                  >
                  <div
                    class="w-full h-16 bg-[#afafaf] flex items-center justify-center font-bold rounded-md mt-4 cursor-pointer hover-primary"
                  >
                    PLACE ORDER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
  root?.appendChild(main);
  main.querySelector(".section-search")?.appendChild(search());
};
renderCart();

// Render cart list
const renderCartList = (arr: CartsItem[]): any => {
  const cartImages = document.querySelector(".cart-images");
  if (cartImages) cartImages.innerHTML = "";
  for (let [k, v] of Object.entries(arr)) {
    const { id, title, poster, price } = v;
    const div = document.createElement("div");
    div.className = `bg-cl-third p-5 rounded-lg mb-6`;
    div.innerHTML = `
      <div class="wrapper-cart-images flex gap-4">
        <div class="cart-thumb flex-[0_0_auto] max-w-[20%]">
          <img
            src=${poster}
            alt=${title}
          />
        </div>
        <!-- End cart-thumb -->
        <div class="cart-detail w-full">
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
            <span class="text-[#f5d462]">
              Earn 5% back in Epic Rewards
            </span>
          </div>
          <div class="pt-8 flex items-center gap-4">
            <span>Self-Refundable</span>
            <i class="fa-regular fa-circle-question"></i>
          </div>
        </div>
        <!-- End cart-detail -->
      </div>
      <div class="pt-3 flex items-center justify-between">
        <i class="fa-brands fa-windows opacity-70"></i>
        <div class="flex items-center gap-6">
          <span
            class="btn-delete opacity-70 cursor-pointer font-semibold hover:opacity-100"
          >
            Remove
          </span>
          <span
            class="opacity-70 cursor-pointer font-semibold hover:opacity-100"
          >
            Move to Wishlist
          </span>
        </div>
      </div>
      <!-- End wrapper-cart-images -->    
    `;
    cartImages?.appendChild(div);
    div.querySelector(".btn-delete")?.addEventListener("click", () => {
      handleDeleteCart(id);
    });
  }
};

renderCartList(cartList);

// Handle add to cart
const handleAddToCart = (game: CartsItem): any => {
  const { id, title, poster, price } = game;
  const cart: CartsItem = {
    id,
    title,
    poster,
    price,
  };
  cartList.push(cart);
  localStorage.setItem("cartList", JSON.stringify(cartList));
};

const handleDeleteCart = (id: number | string): any => {
  const isConfirm = confirm(
    "Are you sure you want to remove this game from your cart?"
  );
  if (!isConfirm) return;
  const newCartList = cartList.filter((game) => game.id !== id);
  renderCartList(newCartList);
  renderBill(newCartList);
  localStorage.setItem("cartList", JSON.stringify(newCartList));
  getCartList();
};

// Render bill
const renderBill = (arr: CartsItem[]): any => {
  const bill = document.querySelector(".bill");
  if (bill) bill.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <li class="flex items-center justify-between">
      <span class="lg:text-base text-sm"> Price </span>
       <span class="total-money lg:text-base text-sm">
          ${handleSumMoney(arr)}
        </span>
      </li>
       <li
         class="flex items-center justify-between pt-3 pb-4"
       >
         <span class="lg:text-base text-sm"> Taxes </span>
         <span class="lg:text-base text-sm">
           Calculated at Checkout
         </span>
       </li>
       <div class="line-stretch-2"></div>
       <li class="flex items-center justify-between">
         <span class="lg:text-xl text-base font-bold">
           Subtotal
         </span>
         <span class="total-money lg:text-xl text-base font-bold">
            ${handleSumMoney(arr)}
         </span>
      </li>
  `;
  bill?.appendChild(div);
};

renderBill(cartList);

// Open cart
const toggleCart = (): any => {
  const checkOutElement = document.querySelector(".check-out");
  const checkOutBtn = document.querySelector(".open-check-out");
  const closeBtn = document.querySelectorAll(".close-check-out");
  checkOutBtn?.addEventListener("click", (): any => {
    checkOutElement?.classList.add("active-block");
  });
  closeBtn.forEach((element): any => {
    element.addEventListener("click", (): any => {
      checkOutElement?.classList.remove("active-block");
    });
  });
};

export { handleAddToCart, cartList };

toggleCart();
