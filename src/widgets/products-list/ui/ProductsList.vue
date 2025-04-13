<template>
  <div v-if="filteredProducts.length" class="product-list">
    <div v-for="(product, index) in filteredProducts" :key="`filtered-${product.id}-${index}`">
      <ProductCard :product="product">
        <template v-if="isNonBasketRoute" #favoriteButton>
          <div @click.stop>
            <FavoriteButton
              @delete-product-by-id="$emit('deleteProductById', product.id)"
              :id="product.id"
            />
          </div>
        </template>
        <template #basketButton>
          <div @click.stop>
            <BasketButton
              :id="product.id"
              @delete-product-from-basket="$emit('deleteProductById', product.id)"
            />
          </div>
        </template>
      </ProductCard>
    </div>
  </div>
  <div v-else class="product-list">
    <div v-for="(product, index) in displayedProducts" :key="`displayed-${product.id}-${index}`">
      <ProductCard :product="product">
        <template v-if="isNonBasketRoute" #favoriteButton>
          <div @click.stop>
            <FavoriteButton :id="product.id" />
          </div>
        </template>
        <template #basketButton>
          <div @click.stop>
            <BasketButton
              :id="product.id"
              @delete-product-from-basket="$emit('deleteProductById', product.id)"
            />
          </div>
        </template>
      </ProductCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductCard } from '@/entities/products'
import { FavoriteButton } from '@/features/products'
import type { TProduct } from '@/shared/types'
import { BasketButton } from '@/features/products'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

defineProps<{
  filteredProducts: TProduct[]
  displayedProducts?: TProduct[]
}>()

defineEmits<{
  (e: 'deleteProductById', id: string): void
}>()

const route = useRoute()

const isNonBasketRoute = computed(() => {
  return route.name !== 'basket'
})
</script>

<style scoped lang="scss">
@import url('./styles.modules.scss');
</style>
