interface CartsItem {
    id: number | string;
    title: string;
    poster: string;
    price: number;
}
declare const handleAddToCart: (game: CartsItem) => any;
export { handleAddToCart };
