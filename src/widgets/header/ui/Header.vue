<template>
  <header class="bg-default h-[80px]">
    <div class="max-w-[1000px] mx-auto flex justify-between items-center pt-5">
      <h1 @click="router.push('/')" class="text-4xl text-white hidden lg:block cursor-pointer">
        Products
      </h1>
      <SearchProducts class="lg:ml-44" />
      <div class="flex gap-6 ml-4 lg:mr-20">
        <HeaderFavoriteButton class="w-7 h-7" />
        <HeaderBasketButton class="w-7 h-7" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { SearchProducts } from '@/features/products'
import { HeaderBasketButton } from '@/features/products'
import { HeaderFavoriteButton } from '@/features/products'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
