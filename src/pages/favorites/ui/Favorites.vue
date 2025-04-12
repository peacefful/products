<template>
  <main class="wrapper">
    <h1 class="text-4xl font-medium">Избранное</h1>
    <ProductsList
      v-if="favoriteProducts.length"
      @delete-product-by-id="deleteProductById"
      :filtered-products="favoriteProducts"
    />

    <p class="mt-12" v-else>Вы ничего не добавили в избранное</p>
  </main>
</template>

<script setup lang="ts">
import { ProductsList } from '@/widgets/products-list'
import { getProduct, mathSalePrice } from '@/entities/products'
import type { TProduct } from '@/shared/types'
import { ref } from 'vue'

const favoriteProducts = ref<TProduct[]>([])

const getFavoriteProducts = async () => {
  const products = localStorage.getItem('favoriteProducts')
  if (products) {
    const productIds = JSON.parse(products)

    await productIds.forEach((id: string) => {
      getProduct(id).then((res) => {
        if (res) {
          res.discountPrice = +mathSalePrice({
            price: res.price,
            discount: res.discount
          }).toFixed(2)

          favoriteProducts.value?.push(res)
        }
      })
    })
  }
}

const deleteProductById = (id: string) => {
  favoriteProducts.value = favoriteProducts.value.filter((product) => product.id !== id)
}

getFavoriteProducts()
</script>
