import header from "../js/header.js";
import footer from "../js/footer.js";
import { addData, getData } from "./apiRequest.js";
import { isValidator } from "./helper.js";

// Toggle menu
const $: any = document.querySelector.bind(document);

const root = document.querySelector(".root");
const rootCart = document.querySelector(".root-cart");
const rootWishlist = document.querySelector(".root-wishlist");

const url = "https://api-games-three.vercel.app";

// Render header
(async () => {
  await getData(url, "games");
  root?.parentNode?.insertBefore(header(), root);
  rootCart?.parentNode?.insertBefore(header(), rootCart);
  rootWishlist?.parentNode?.insertBefore(header(), rootWishlist);
  setTimeout(() => {
    signOut();
    scrollToTop();
  }, 2000);
})();

// Render Footer
(async () => {
  await getData(url, "games");
  setTimeout(() => {
    root?.insertAdjacentElement("afterend", footer());
    rootCart?.insertAdjacentElement("afterend", footer());
    rootWishlist?.insertAdjacentElement("afterend", footer());
  }, 1000);
})();

// Search scroll
const searchScroll = (): any => {
  window.addEventListener("scroll", () => {
    const searchSection = $(".section-search");
    if (window.scrollY > 1) {
      searchSection?.classList.add("scroll");
    } else {
      searchSection?.classList.remove("scroll");
    }
  });
};

searchScroll();

// Scroll to top
const scrollToTop = () => {
  const scrollElement = $(".scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollElement?.classList.add("active-block");
    } else {
      scrollElement?.classList.remove("active-block");
    }
  });

  scrollElement?.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

// Format money vn
const formatMoney = (money: number): string => {
  return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

// Register
const urlUser = "http://localhost:3000";
class Users {
  public cartList: any[] = [];
  public wishlists: any[] = [];
  constructor(
    public email: string,
    public country: string,
    public firstName: string,
    public lastName: string,
    public disPlayName: string,
    public password: string
  ) {}
  getFullName() {
    return this.firstName + this.lastName;
  }
}

const formRegister = document.querySelector(
  "#form-register"
) as HTMLFormElement;
const getDataRegister = () => {
  formRegister?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const data = new FormData(formRegister);
    const user = new Users(
      data.get("email") as string,
      data.get("country") as string,
      data.get("firstName") as string,
      data.get("lastName") as string,
      data.get("disPlayName") as string,
      data.get("password") as string
    );
    if (isValidator()) {
      addData(urlUser, "users", user);
      window.location.href = "/src/views/pages/auth/signIn/signIn.html";
    }
  });
};

getDataRegister();

// Sign in
interface UserItems {
  id: number | string;
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  disPlayName: string;
  password: string;
  cartList: any[];
  wishlist: any[];
}

let users: UserItems[] = [];

const getUsers = async (): Promise<any> => {
  const data = await getData(urlUser, "users");
  users = data;
  getDataSignIn(data);
};
getUsers();

const checkLogin = (
  dataList: UserItems[],
  user: {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
  }
): boolean => {
  return dataList.some(
    (data) => data.email === user.email && data.password === user.password
  );
};

const formSignIn = document.querySelector("#form-signIn") as HTMLFormElement;
const getDataSignIn = (dataList: UserItems[]) => {
  formSignIn?.addEventListener("submit", (e: SubmitEvent) => {
    if (isValidator()) {
      const data = new FormData(formSignIn);
      const user = { email: data.get("email"), password: data.get("password") };
      if (user && checkLogin(dataList, user)) {
        const findUser = users.find((item) => item.email === user.email);
        localStorage.setItem("user", JSON.stringify(findUser));
        window.location.href = "/index.html";
      } else {
        alert("Incorrect account or password");
      }
    }
  });
};

// Sign out
const signOut = (): any => {
  const btnSignOut = document.querySelectorAll(".sign-out");
  btnSignOut.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.reload();
    });
  });
};

export { formatMoney };
