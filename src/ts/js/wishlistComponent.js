import { gameList } from "./browse.js";
const wishlistComponent = (id) => {
    const div = document.createElement("div");
    const wishlistss = [{ id: 1, title: "trong" }];
    const cartId = wishlistss.map((cart) => cart.id);
    const findGame = gameList.find((game) => game.id === Number(id));
    const checkGame = () => {
        if (cartId.includes(findGame.id)) {
            return true;
        }
        return false;
    };
    div.innerHTML = "";
    div.className = "cursor-pointer";
    div.innerHTML = `
       ${!checkGame()
        ? `
        <i class="icon-wishlist text-lg fa-solid fa-circle-plus"></i>
        <div
          class="add-wishlist absolute py-2 bg-primary w-40 text-center"
          value=${id}
        >
          Add to Wishlist
        </div>
        `
        : `
        <i class="icon-wishlist text-lg fa-solid fa-check"></i>
        <div
          class=" absolute py-2 bg-primary w-40 text-center "
        >
          Remove to Wishlist
        </div>
        `}

    `;
    return div;
};
export default wishlistComponent;
