import { api } from '../../api'

export type Product = {
  id: number
  colour: string
  name: string
  price: number
  img: string
}

export interface Menu {
  name: string
  img: string
  children: Child[]
}

export interface Child {
  name: string
  categories: string[]
}

export const productApi = api.injectEndpoints({
  endpoints: build => ({
    fetchProducts: build.query<Product[], null>({
      query: () => `products/products`,
    }),
    fetchMenu: build.query<[Menu], null>({
      query: () => `products/menu`,
    }),
    fetchProduct: build.query<Product, string>({
      query: id => `products/products/${id}`,
    }),
  }),
  overrideExisting: false,
})

export const {
  useFetchProductsQuery,
  useFetchMenuQuery,
  useFetchProductQuery,
} = productApi
