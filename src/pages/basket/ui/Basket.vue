<template>
  <main class="wrapper">
    <h1 class="text-4xl font-medium">Корзина</h1>
    <ProductsList
      v-if="basketProducts.length"
      @delete-product-by-id="deleteProductById"
      :filtered-products="basketProducts"
    />

    <p class="mt-12" v-else>Вы ничего не добавили в корзину</p>
  </main>
</template>

<script setup lang="ts">
import { getProduct, mathSalePrice } from '@/entities/products'
import type { TProduct } from '@/shared/types'
import { ref } from 'vue'
import { ProductsList } from '@/widgets/products-list'

const basketProducts = ref<TProduct[]>([])

const getFavoriteProducts = async () => {
  const products = localStorage.getItem('basketProducts')
  if (products) {
    const productIds = JSON.parse(products)

    await productIds.forEach((id: string) => {
      getProduct(id).then((res) => {
        if (res) {
          res.discountPrice = +mathSalePrice({
            price: res.price,
            discount: res.discount
          }).toFixed(2)

          basketProducts.value?.push(res)
        }
      })
    })
  }
}

const deleteProductById = (id: string) => {
  console.log('deleteProductById')

  basketProducts.value = basketProducts.value.filter((product) => product.id !== id)
}

getFavoriteProducts()
</script>
