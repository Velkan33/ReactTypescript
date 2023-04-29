export type Product = {
 id: number;
 title: string;
 images: string[];
 price: number;
 rating: number;
 thumbnail: string;
 description: string;
 category: string;
 stock: number;
 discountPercentage: number;
};
export type StateType = {
 categories: string[];
 allProducts: Product[];
 menuOpen: null | number;
 loading: boolean;
 urlToFetch: string | null;
 selectedProductId: number | null;
 selectedProductData: null | Product;
 query: string;
};
export type Action = {
 type: string;
 data?: string[] | Product[];
 selectedData?: Product;
 value?: number;
 urlData?: string;
 query?: string;
};
