import { getData } from "../js/apiRequest.js";
import { formatMoney } from "../js/main.js";
import search from "../js/search.js";
import { handleAddWishlist, handleDeleteWishlist } from "./wishList.js";
const url = "https://api-games-three.vercel.app";
let genreList = [
    {
        id: 1,
        title: "Action",
        thumbnail: "Action",
        status: false,
    },
    {
        id: 2,
        title: "Advantage",
        thumbnail: "Advantage",
        status: false,
    },
    {
        id: 3,
        title: "Card Game",
        thumbnail: "Card Game",
        status: false,
    },
    {
        id: 4,
        title: "Fantasy",
        thumbnail: "Fantasy",
        status: false,
    },
    {
        id: 5,
        title: "Indie",
        thumbnail: "Indie",
        status: false,
    },
    {
        id: 6,
        title: "Open World",
        thumbnail: "Open World",
        status: false,
    },
    {
        id: 7,
        title: "Space",
        thumbnail: "Space",
        status: false,
    },
];
let featureList = [
    {
        id: 1,
        title: "Co-op",
        status: false,
    },
    {
        id: 2,
        title: "Multiplayer",
        status: false,
    },
    {
        id: 3,
        title: "Online Multiplayer",
        status: false,
    },
    {
        id: 4,
        title: "MMO",
        status: false,
    },
];
let typeList = [
    {
        id: 1,
        title: "Experience",
        status: false,
    },
    {
        id: 2,
        title: "Game",
        status: false,
    },
    {
        id: 3,
        title: "Game Bundle",
        status: false,
    },
    {
        id: 4,
        title: "Game Demo",
        status: false,
    },
];
const sortList = [
    {
        id: 1,
        title: "All",
        status: true,
    },
    {
        id: 2,
        title: "New Release",
        status: false,
    },
    {
        id: 3,
        title: "Price: High to Low",
        status: false,
    },
    {
        id: 4,
        title: "Price: Low to High",
        status: false,
    },
];
let gameList = [];
let cloneGames = [];
let wishlists = [];
const getWishlist = () => {
    wishlists = JSON.parse(localStorage.getItem("wishlists") || "[]");
};
getWishlist();
const getDataLocalStorage = () => {
    genreList =
        JSON.parse(localStorage.getItem("genreList")) || genreList;
    featureList =
        JSON.parse(localStorage.getItem("featureList")) || featureList;
    typeList = JSON.parse(localStorage.getItem("typeList")) || typeList;
};
getDataLocalStorage();
const getGameList = async () => {
    const data = await getData(url, "games");
    gameList.push(...data);
    cloneGames.push(...data);
    renderGameList(cloneGames);
};
getGameList();
const getGameGenreList = async () => {
    const data = await getData(url, "genres");
    renderGenres(data);
    spliceBrowse();
};
getGameGenreList();
const renderBrowse = () => {
    const root = document.querySelector(".root");
    const main = document.createElement("main");
    main.innerHTML = `
      <section class="section-search fixed bg-primary w-full z-[99999]">
   
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
                    <select name="" id="" class="sort bg-primary">
                    
                    </select>
                  </div>
               
                </div>
                <div class="game-right">
                  <div
                    class="font-medium lg:text-xl text-base cursor-pointer flex items-center gap-2 lg:hidden py-1.5 px-3 bg-cl-third rounded-lg"
                  >
                    Filter
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
                    Filters
                  </span>
                </div>
                <div class="filter-main">
                  <div class="filter-input mt-4 mb-4 relative">
                    <input
                      class="search bg-third outline-none px-6 py-2 hover-four w-full"
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
                      Genres
                      <i
                        class="fa-solid fa-chevron-down peer-checked:hidden"
                      ></i>
                    </label>
                    <ul class="genre-list hidden peer-checked:block">
                 
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
                    <ul class="feature-list hidden peer-checked:block">
          
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
                    <ul class="type-list hidden peer-checked:block">
          
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
                      Close
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
    // Search
    const inputSearch = main.querySelector(".search");
    inputSearch?.addEventListener("input", (e) => {
        const target = e.target;
        handleFilterBySearch(target.value.trim());
    });
};
renderBrowse();
// Render genres
const renderGenres = (arr) => {
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
// Render genres
const renderGenresFilter = (genreList) => {
    const genreListElement = document.querySelector(".genre-list");
    if (genreListElement)
        genreListElement.innerHTML = "";
    genreList.forEach((genre) => {
        const li = document.createElement("li");
        li.className = `opacity-60 py-3 px-3 cursor-pointer ${genre.status ? "bg-cl-third" : ""} hover:bg-cl-third transition-all flex items-center justify-between`;
        li.innerHTML = `
       ${genre.title}
     ${genre.status ? '<i class="fa-solid fa-check"></i>' : ""}
    `;
        genreListElement?.appendChild(li);
        li.addEventListener("click", () => {
            toggleGenre(genre.id);
            renderGameList(cloneGames);
        });
    });
};
renderGenresFilter(genreList);
const toggleGenre = (id) => {
    const newGenreList = genreList.map((genre) => {
        if (genre.id === id) {
            genre.status = !genre.status;
        }
        return { ...genre };
    });
    renderGenresFilter(newGenreList);
    localStorage.setItem("genreList", JSON.stringify(newGenreList));
};
// Render features
const renderFeatures = (featureList) => {
    const featureListElement = document.querySelector(".feature-list");
    if (featureListElement)
        featureListElement.innerHTML = "";
    featureList.forEach((feature) => {
        const li = document.createElement("li");
        li.className = `opacity-60 py-3 px-3 cursor-pointer ${feature.status ? "bg-cl-third" : ""} hover:bg-cl-third transition-all flex items-center justify-between`;
        li.innerHTML = `
       ${feature.title}
     ${feature.status ? '<i class="fa-solid fa-check"></i>' : ""}
    `;
        featureListElement?.appendChild(li);
        li.addEventListener("click", () => {
            toggleFeature(feature.id);
            renderGameList(cloneGames);
        });
    });
};
renderFeatures(featureList);
const toggleFeature = (id) => {
    const newFeature = featureList.map((feature) => {
        if (feature.id === id) {
            feature.status = !feature.status;
        }
        return { ...feature };
    });
    renderFeatures(newFeature);
    localStorage.setItem("genreList", JSON.stringify(newFeature));
};
// Render types
const renderTypes = (typeList) => {
    const typeListElement = document.querySelector(".type-list");
    if (typeListElement)
        typeListElement.innerHTML = "";
    typeList.forEach((type) => {
        const li = document.createElement("li");
        li.className = `opacity-60 py-3 px-3 cursor-pointer ${type.status ? "bg-cl-third" : ""} hover:bg-cl-third transition-all flex items-center justify-between`;
        li.innerHTML = `
       ${type.title}
     ${type.status ? '<i class="fa-solid fa-check"></i>' : ""}
    `;
        typeListElement?.appendChild(li);
        li.addEventListener("click", () => {
            toggleType(type.id);
            renderGameList(cloneGames);
        });
    });
};
renderTypes(typeList);
const toggleType = (id) => {
    const newTypeList = typeList.map((type) => {
        if (type.id === id) {
            type.status = !type.status;
        }
        return { ...type };
    });
    renderTypes(newTypeList);
    localStorage.setItem("genreList", JSON.stringify(newTypeList));
};
const renderGameList = (arr) => {
    const gameListElement = document.querySelector(".game-main");
    if (gameListElement)
        gameListElement.innerHTML = "";
    const findSort = sortList.find((sort) => sort.status);
    let games = handleSort(arr, findSort?.id);
    games = filterGames(games);
    if (gameListElement && games.length < 1) {
        gameListElement.innerHTML = `<div>No products found</div>`;
    }
    for (let [k, v] of Object.entries(games)) {
        const { id, title, poster, discount, price } = v;
        const wishlistIds = wishlists.map((wishlist) => wishlist.id);
        const findGame = gameList.find((game) => game.id === Number(id));
        const checkGame = () => {
            if (wishlistIds.includes(findGame.id)) {
                return true;
            }
            return false;
        };
        const div = document.createElement("div");
        div.innerHTML = "";
        div.innerHTML = `
    <div class="wrapper-game relative">
      <a href="/src/views/pages/browse/detailGame/detailGame.html?id=${id}" class="hover-primary">
        <img
          class="rounded-lg"
          src=${poster}
          alt=${title}
      />
      </a>
      <div class="wrapper-wishlist absolute top-0 right-1 z-[99] ">
           ${!checkGame()
            ? `
        <i class="add-wishlist icon-wishlist text-lg fa-solid fa-circle-plus cursor-pointer"></i>
        <div
          class="absolute py-2 bg-primary w-40 text-center"
        >
          Add to Wishlist
        </div>
        `
            : `
        <i class="remove-wishlist icon-wishlist text-lg fa-solid fa-check cursor-pointer"></i>
        <div
          class="absolute py-2 bg-primary w-40 text-center "
        >
          Remove to Wishlist
        </div>
        `}
      </div>
    </div>
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
        gameListElement?.appendChild(div);
        // Add to wishlist
        div.querySelector(".add-wishlist")?.addEventListener("click", () => {
            addWishlist(arr, v);
        });
        div.querySelector(".remove-wishlist")?.addEventListener("click", () => {
            removeWishlist(arr, id);
        });
    }
};
const addWishlist = (arr, game) => {
    handleAddWishlist(game);
    getWishlist();
    renderGameList(arr);
};
const removeWishlist = (arr, id) => {
    handleDeleteWishlist(id);
    getWishlist();
    renderGameList(arr);
};
// Filter game by search
const handleFilterBySearch = (value) => {
    cloneGames = gameList.filter((game) => game.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    renderGameList(cloneGames);
};
// Filter games
const filterGames = (arr) => {
    const filterGameList = {};
    genreList.forEach((genre) => {
        if (genre.status) {
            if (!filterGameList.genres) {
                filterGameList.genres = [];
            }
            filterGameList.genres.push(genre.title);
        }
    });
    featureList.forEach((feature) => {
        if (feature.status) {
            if (!filterGameList.features) {
                filterGameList.features = [];
            }
            filterGameList.features.push(feature.title);
        }
    });
    typeList.forEach((type) => {
        if (type.status) {
            if (!filterGameList.types) {
                filterGameList.types = [];
            }
            filterGameList.types.push(type.title);
        }
    });
    const newListGame = arr.filter((game) => {
        return ((!filterGameList.genres || filterGameList.genres.includes(game.genre)) &&
            (!filterGameList.features ||
                filterGameList.features.includes(game.feature)) &&
            (!filterGameList.types || filterGameList.types.includes(game.type)));
    });
    return newListGame;
};
// Sort
const renderSort = (arr) => {
    const sortElement = document.querySelector(".sort");
    arr.forEach((sort) => {
        const option = document.createElement("option");
        option.setAttribute("value", `${sort.id}`);
        if (sort.status) {
            option.setAttribute("selected", "selected");
        }
        option.innerHTML = `${sort.title}`;
        sortElement?.appendChild(option);
    });
    sortElement?.addEventListener("change", (e) => {
        const target = e.target;
        const newSortList = sortList.map((sort) => {
            sort.status = false;
            if (sort.id === Number(target.value)) {
                sort.status = true;
            }
            return { ...sort };
        });
        sortList.length = 0;
        sortList.push(...newSortList);
        renderGameList(cloneGames);
    });
};
renderSort(sortList);
const handleSort = (arr, id) => {
    let newGameList = [];
    const gameClone = structuredClone(arr);
    const formatTime = (value) => {
        const date = new Date(value);
        return date.getTime();
    };
    switch (id) {
        case 1:
            newGameList = arr;
            break;
        case 2:
            newGameList = gameClone.sort((a, b) => {
                return formatTime(b.release_date) - formatTime(a.release_date);
            });
            break;
        case 3:
            newGameList = gameClone.sort((a, b) => b.price - a.price);
            break;
        case 4:
            newGameList = gameClone.sort((a, b) => a.price - b.price);
            break;
        default:
            throw Error("Invalid value");
    }
    return newGameList;
};
// Splide
function spliceBrowse() {
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
const toggleFilerMb = () => {
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
export { gameList, renderGameList };
