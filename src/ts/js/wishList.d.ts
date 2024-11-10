interface WishlistItems {
    id: number | string;
    title: string;
    poster: string;
    price: number;
}
declare const handleAddWishlist: (game: WishlistItems) => any;
declare const handleDeleteWishlist: (id: number | string) => any;
export { handleAddWishlist, handleDeleteWishlist };
