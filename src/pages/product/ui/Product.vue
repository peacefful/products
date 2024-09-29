<template>
  <main class="wrapper">
    <Category :product="currentProduct?.title" />
    <FullCard :product="currentProduct" />
  </main>
</template>

<script setup lang="ts">
import { getProduct, mathSalePrice } from '@/entities/products'
import { Category } from '@/entities/products'
import { FullCard } from '@/entities/products'
import { useRoute } from 'vue-router'
import { type TProduct } from '@/shared/types'
import { ref } from 'vue'

const productId: string = useRoute().params.id as string
const currentProduct = ref<TProduct | null>()

getProduct(productId).then((res) => {
  if (res) {
    res.discountPrice = +mathSalePrice({
      price: res.price,
      discount: res.discount
    }).toFixed(2)

    currentProduct.value = res
  }
})
</script>
