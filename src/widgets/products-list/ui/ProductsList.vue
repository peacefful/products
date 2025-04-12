<template>
  <div v-if="filteredProducts.length" class="product-list">
    <div v-for="(product, index) in filteredProducts" :key="`filtered-${product.id}-${index}`">
      <ProductCard :product="product">
        <div @click.stop>
          <FavoriteButton
            @delete-product-by-id="$emit('deleteProductById', product.id)"
            :id="product.id"
          />
        </div>
      </ProductCard>
    </div>
  </div>
  <div v-else class="product-list">
    <div v-for="(product, index) in displayedProducts" :key="`displayed-${product.id}-${index}`">
      <ProductCard :product="product">
        <div @click.stop>
          <FavoriteButton :id="product.id" />
        </div>
      </ProductCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductCard } from '@/entities/products'
import { FavoriteButton } from '@/features/products'
import type { TProduct } from '@/shared/types'

defineProps<{
  filteredProducts: TProduct[]
  displayedProducts?: TProduct[]
}>()

defineEmits<{
  (e: 'deleteProductById', id: string): void
}>()
</script>

<style scoped lang="scss">
@import url('./styles.modules.scss');
</style>
