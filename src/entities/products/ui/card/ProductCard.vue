<template>
  <article
    v-if="product"
    class="border border-baseSilver rounded-2xl p-[24px] max-w-[306px] cursor-pointer relative"
    @click="router.push(`/product/${product.id}`)"
  >
    <Button class="h-11 w-11 rounded-full bg-[#5454544D] absolute top-1 right-1">
      <SilverFavoriteIcon />
    </Button>
    <img src="/public/card-phone.png" alt="no image" />
    <p class="mt-3 font-medium text-xs lg:text-sm">{{ product.title }}</p>
    <Rating :rated-count="product.ratesCount" :rating="product.rating" />
    <section class="flex items-center mt-6">
      <p class="text-[#979797] line-through text-sm lg:text-base">{{ product.price }} ₸</p>
      <span class="bg-[#F63B00] px-[6px] py-[1px] ml-2 text-white rounded-[50px] text-xs">
        -{{ product.discount }}%
      </span>
    </section>
    <section class="block justify-between lg:flex">
      <p class="text-[#322F38] text-[20px] mt-3 lg:text-[32px] font-bold">
        {{ product.discountPrice }} ₸
      </p>
      <Button class="h-11 bg-default mt-3 w-full lg:w-11 lg:mt-0">
        <BasketIcon />
      </Button>
    </section>
  </article>
</template>

<script setup lang="ts">
import { type TProductProps } from '@/entities/products'
import { Button } from '@/shared/ui'
import { Rating } from '@/entities/products'
import { useRouter } from 'vue-router'
import { BasketIcon, SilverFavoriteIcon } from '@/shared/assets'

const router = useRouter()

defineProps<TProductProps>()
</script>
