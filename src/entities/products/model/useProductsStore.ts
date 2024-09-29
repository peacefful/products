import { storage } from '@/shared/lib'
import { defineStore } from 'pinia'
import { getResultProducts, quickSort } from '../lib'
import type { TProduct } from '@/shared/types'
import type { SortType, TSearch } from './types'

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    allProducts: [] as TProduct[],
    displayedProducts: [] as TProduct[],
    itemsPerLoad: 10,
    loadIndex: 0,

    searchProduct: ''
  }),
  actions: {
    loadMoreItems() {
      if (this.loadIndex < this.allProducts.length) {
        const nextItems = this.allProducts.slice(this.loadIndex, this.loadIndex + this.itemsPerLoad)
        this.displayedProducts = [...this.displayedProducts, ...nextItems]

        this.sortedData(storage.getData('filterName') || 'byPopularity')

        this.loadIndex += this.itemsPerLoad
      }
    },
    sortedData(sortedType: string | null) {
      if (sortedType) {
        this.displayedProducts = quickSort(this.displayedProducts, sortedType as SortType)
      }
      return this.displayedProducts
    },
    searchProduct(searchValue: string) {
      const searchData: TSearch = {
        value: searchValue,
        products: this.allProducts
      }

      if (searchValue.trim() === '') {
        this.displayedProducts = [...this.allProducts]
      } else {
        this.displayedProducts = getResultProducts(searchData)
      }
    }
  }
})
