import type { TProduct } from '@/shared/types'

export const handleProductsСharacteristic = (product: TProduct) => {
  return [
    { id: 1, title: 'Страна-изготовитель', value: product.countryManufacturer },
    { id: 2, title: 'Материал оправы', value: product.material },
    { id: 3, title: 'Материал линзы', value: product.lenseMaterial },
    { id: 4, title: 'Ширина линзы, мм', value: product.lenseWidth },
    { id: 5, title: 'Разъем', value: product.connector }
  ]
}
