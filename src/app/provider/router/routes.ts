import { Products } from '@/pages/products'
import { Product } from '@/pages/product'

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
  }
]
