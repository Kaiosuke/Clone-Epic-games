interface WishlistItems {
    id: number | string;
    title: string;
    poster: string;
    price: number;
}
declare const handleAddWishlist: (game: WishlistItems) => any;
export { handleAddWishlist };
