<template>
  <main class="wrapper">
    <Category product="" />
    <Filter />
    <ProductsList
      :displayedProducts="productsStore.displayedProducts"
      :filtered-products="productsStore.filteredProducts"
    />
  </main>
</template>

<script setup lang="ts">
import { ProductsList } from '@/widgets/products-list'
import { Category } from '@/entities/products'
import { Filter } from '@/features/products'
import { useProductsStore } from '@/entities/products'
import { useCheckHeightScreen } from '@/entities/products'
import { getProducts } from '@/entities/products'
import { handleProducts } from '@/entities/products'

const productsStore = useProductsStore()

useCheckHeightScreen(productsStore.loadMoreItems)

if (!productsStore.allProducts.length) {
  getProducts().then((res) => {
    productsStore.allProducts = handleProducts(res)
    productsStore.loadMoreItems()
  })
}
</script>
