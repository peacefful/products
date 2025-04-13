import { Products } from '@/pages/products'
import { Product } from '@/pages/product'
import { Favorites } from '@/pages/favorites'
import { Basket } from '@/pages/basket'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  }
]
