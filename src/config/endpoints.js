import { products } from "../utils/constants/products";

export const URLBASE = 'http://localhost:3000/api'

export const ENDPOINT = {
  login: `${URLBASE}/auth/login`, // 0k
  register: `${URLBASE}/auth/register`, // 0k
  products: `${URLBASE}/productos`,  // ok
  filterProducts: `${URLBASE}/productos/filter`,
  cart: `${URLBASE}/cart`,
  userProfile: `${URLBASE}/auth/me`, // 0k
  listComuna: `${URLBASE}/comunas`, // 0k
};7