import header from "../js/header.js";
import footer from "../js/footer.js";
import { addData, getData } from "./apiRequest.js";
import { isValidator } from "./helper.js";
// Toggle menu
const body = document.querySelector("body");
const $ = document.querySelector.bind(document);
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
setTimeout(() => {
    signOut();
}, 500);
const toggleMenu = () => {
    const headerMenu = $(".header-menu");
    const closeMenu = $(".close-menu");
    const rsHeaderMenu = $(".rs-header-menu");
    headerMenu?.addEventListener("click", () => {
        rsHeaderMenu?.classList.add("active-bar");
        body?.classList.add("overlay");
    });
    closeMenu?.addEventListener("click", () => {
        rsHeaderMenu?.classList.remove("active-bar");
        body?.classList.remove("overlay");
    });
};
toggleMenu();
// Toggle bar
const toggleBar = () => {
    const headerBar = $(".header-bar");
    const closeBar = $(".close-header-bar");
    const mbBar = $(".mb-bar");
    headerBar?.addEventListener("click", () => {
        mbBar?.classList.add("active-bar");
        body?.classList.add("overlay");
    });
    closeBar?.addEventListener("click", () => {
        mbBar?.classList.remove("active-bar");
        body?.classList.remove("overlay");
    });
};
toggleBar();
//Toggle search
const toggleSearch = () => {
    const toggleSearch = document.querySelector(".toggle-search");
    const iconSearch = document.querySelector(".icon-search");
    const closeSearch = document.querySelector(".close-search");
    iconSearch?.addEventListener("click", () => {
        toggleSearch?.classList.add("search-active");
        body?.classList.add("overlay");
    });
    closeSearch?.addEventListener("click", () => {
        toggleSearch?.classList.remove("search-active");
        body?.classList.remove("overlay");
    });
};
toggleSearch();
// Search scroll
const searchScroll = () => {
    // if (window.screenY > 1) searchSection?.classList.add("scroll");
    window.addEventListener("scroll", () => {
        const searchSection = $(".section-search");
        if (window.scrollY > 1) {
            searchSection?.classList.add("scroll");
        }
        else {
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
        }
        else {
            scrollElement?.classList.remove("active-block");
        }
    });
    scrollElement?.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};
scrollToTop();
// Format money vn
const formatMoney = (money) => {
    return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
// Register
const urlUser = "http://localhost:3000";
class Users {
    email;
    country;
    firstName;
    lastName;
    disPlayName;
    password;
    cartList = [];
    wishlists = [];
    constructor(email, country, firstName, lastName, disPlayName, password) {
        this.email = email;
        this.country = country;
        this.firstName = firstName;
        this.lastName = lastName;
        this.disPlayName = disPlayName;
        this.password = password;
    }
    getFullName() {
        return this.firstName + this.lastName;
    }
}
const formRegister = document.querySelector("#form-register");
const getDataRegister = () => {
    formRegister?.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(formRegister);
        const user = new Users(data.get("email"), data.get("country"), data.get("firstName"), data.get("lastName"), data.get("disPlayName"), data.get("password"));
        if (isValidator()) {
            addData(urlUser, "users", user);
            window.location.href = "/src/views/pages/auth/signIn/signIn.html";
        }
    });
};
getDataRegister();
let users = [];
const getUsers = async () => {
    const data = await getData(urlUser, "users");
    users = data;
    getDataSignIn(data);
};
getUsers();
const checkLogin = (dataList, user) => {
    return dataList.some((data) => data.email === user.email && data.password === user.password);
};
const formSignIn = document.querySelector("#form-signIn");
const getDataSignIn = (dataList) => {
    formSignIn?.addEventListener("submit", (e) => {
        if (isValidator()) {
            const data = new FormData(formSignIn);
            const user = { email: data.get("email"), password: data.get("password") };
            if (user && checkLogin(dataList, user)) {
                const findUser = users.find((item) => item.email === user.email);
                localStorage.setItem("user", JSON.stringify(findUser));
                window.location.href = "/index.html";
            }
            else {
                alert("Incorrect account or password");
            }
        }
    });
};
// Sign-out
const signOut = () => {
    const btnSignOut = document.querySelectorAll(".sign-out");
    btnSignOut.forEach((element) => {
        element.addEventListener("click", () => {
            localStorage.removeItem("user");
            window.location.reload();
        });
    });
};
export { formatMoney };
