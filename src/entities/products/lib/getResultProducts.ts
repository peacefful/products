import { type TSearch } from '../model'

export const getResultProducts = (data: TSearch) => {
  if (data.value) {
    return data.products.filter((product) => {
      return product.title.toLowerCase().includes(data.value.toLowerCase())
    })
  } else {
    return data.products
  }
}
