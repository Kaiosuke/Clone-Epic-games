import { getData } from "./apiRequest.js";

interface UserItems {
  id: number | string;
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  disPlayName: string;
  password: string;
  games: any[];
  wishlist: any[];
}

const url = "http://localhost:3000";
const getUsers = async (): Promise<any> => {
  const data = await getData(url, "users");
  header(data);
};
getUsers();

const header = (dataList: UserItems[]): any => {
  const header = document.createElement("header");
  const getUser = JSON.parse(localStorage.getItem("user") as string);
  let user: UserItems | undefined = {
    id: "",
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    disPlayName: "",
    password: "",
    games: [],
    wishlist: [],
  };
  if (dataList) {
    user = dataList.find((data) => data.email === getUser.email);
  }
  header.className = "header";
  header.innerHTML = `
      <div
        class="w-full bg-primary pt-6 pb-6 pl-8 pr-8 relative flex justify-between items-center"
      >
        <div class="flex gap-5 items-center">
          <a href="/index.html">
            <img
              class="w-6 h-auto hover-primary"
              src="/src/media/icons/logo.png"
              alt="logo"
            />
          </a>
          <nav>
            <ul class="flex items-center gap-5">
              <li class="flex gap-2 items-center">
                <a href="/index.html">
                  <img
                    class="h-8 hover-primary"
                    src="https://cms-assets.unrealengine.com/qAiDvosPSFGqJxTVuY7h"
                    alt="logo"
                  />
                </a>
                <div class="header-menu">
                  <i
                    class="fa-solid fa-sort-down text-white cursor-pointer hover-primary block lg:hidden"
                  ></i>
                </div>
              </li>
              <li class="">
                <div
                  class="flex lg:flex-row lg:items-center flex-col gap-5 rs-header-menu p-4"
                >
                  <i
                    class="close-menu fa-solid fa-xmark text-xl lg:hidden block"
                  ></i>
                  <a href="#!" class="cursor-pointer hover-primary">Support</a>
                  <div class="cursor-pointer relative group">
                    Distribute
                    <i class="fa-solid fa-angle-down text-white"></i>
                    <ul
                      class="w-72 h-auto absolute bg-primary p-5 rounded-2xl hidden group-hover:block z-[999999]"
                    >
                      <li class="py-2">
                        <a class="hover-primary" href="#">
                          Distribute on Epic Games Store
                        </a>
                      </li>
                      <li class="py-2">
                        <a class="hover-primary" href="#"> Developer Forums </a>
                      </li>
                      <li class="py-2">
                        <a class="hover-primary" href="#"> Documentation </a>
                      </li>
                      <li class="py-2">
                        <a class="hover-primary" href="#"> Learning </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex gap-4 items-center relative">
          <div class="md:static md:bg-primary">
            <div
              class="mb-bar rs-header-bar gap-2 p-4 lg:p-0 flex flex-col items-center lg:flex-row lg:items-baseline relative"
            >
              <div class="close-header-bar lg:hidden block">
                <i class="fa-solid fa-xmark text-red-600 text-2xl"></i>
              </div>
              <div class="hover-primary cursor-pointer">
                <i class="fa-solid fa-globe"></i>
              </div>
            <div class="hover-primary cursor-pointer">
            </div>
            ${
              getUser
                ? `
                <div class="flex items-center gap-2 relative group">
                  <div
                    class="w-7 h-7 bg-slate-600 rounded-full flex items-center justify-center"
                  >
                    K
                  </div>
                  <div class="hover-primary cursor-pointer">Kaio</div>
                <div class="absolute -bottom-28 right-0  w-28 bg-[#27272c] shadow-lg shadow-primary hidden lg:group-hover:flex group-hover:flex-col rounded-lg">
                    <a href="#!" class="hover-primary block w-full text-center py-4">Profile</a>
                    <div class="cursor-pointer hover-primary w-full text-center py-4">Sign Out</div>
                  </div>
                </div>
                <div class="hover-primary cursor-pointer bg-gray-500 opacity-80 px-2 py-1 rounded-lg text-white lg:hidden block">
                  Sign Out
                </div>             
              `
                : `
                <a
                  href="/src/views/pages/auth/signIn/signIn.html"
                  class="hover-primary cursor-pointer bg-gray-500 opacity-80 px-2 py-1 rounded-lg text-white"
                >
                  Sign in
                </a>
                `
            }
            </div>
          </div>
          <a href="#!"
            class="hover-primary cursor-pointer text-black bg-secondary px-2 py-1 rounded-lg"
          >
            Download
          </a>
          <div class="header-bar block lg:hidden">
            <i class="fa-solid fa-bars text-white"></i>
          </div>
        </div>
      </div>
  `;
  return header;
};

export default header;
