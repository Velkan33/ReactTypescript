export type Product = {
 id: number | string;
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
 selectedProductId: number | string | null;
 selectedProductData: null | Product;
 query: string;
 shoppingCart: null | {
  products: {
   id: string | number;
   price: number;
   thumbnail: string;
   amount: number;
  }[];
 };
};
export type Action = {
 type: string;
 data?: string[] | Product[];
 selectedData?: Product;
 value?: number | string;
 amount?: number;
 urlData?: string;
 query?: string;
 price?: number;
};
