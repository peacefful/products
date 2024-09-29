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

    filteredProducts: [] as TProduct[],
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
        if (this.filteredProducts.length) {
          this.filteredProducts = quickSort(this.filteredProducts, sortedType as SortType)
          return this.filteredProducts
        } else {
          this.displayedProducts = quickSort(this.displayedProducts, sortedType as SortType)
        }
      }
      return this.displayedProducts
    },
    searchProduct(searchValue: string) {
      const searchData: TSearch = {
        value: searchValue,
        products: this.displayedProducts
      }

      if (searchValue.trim() === '') {
        this.loadIndex = 0
        this.displayedProducts = [...this.allProducts.slice(0, this.itemsPerLoad)]
        this.filteredProducts = []
      } else {
        this.filteredProducts = getResultProducts(searchData)
      }
    }
  }
})
