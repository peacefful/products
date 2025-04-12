import { Products } from '@/pages/products'
import { Product } from '@/pages/product'
import { Favorites } from '@/pages/favorites'

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
  }
]
