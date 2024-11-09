interface GamesItem {
    id: number | string;
    title: string;
    poster: string;
    images: string[];
    thumbnails: string[];
    price: number;
    evaluate: number;
    logo: string;
    description: string;
    genre: string;
    feature: string;
    publisher: string;
    developer: string;
    release_date: string;
    type: string;
    discount: string;
}
declare let gameList: GamesItem[];
declare const renderGameList: (arr: GamesItem[]) => any;
export { gameList, renderGameList };
