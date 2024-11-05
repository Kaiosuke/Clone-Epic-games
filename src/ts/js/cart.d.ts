interface CartsItem {
    id: number | string;
    title: string;
    poster: string;
    price: number;
}
declare let cartList: CartsItem[];
declare const handleAddToCart: (game: CartsItem) => any;
export { handleAddToCart, cartList };
