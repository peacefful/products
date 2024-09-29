<template>
  <div
    v-if="product"
    class="border border-baseSilver rounded-2xl p-[24px] max-w-[306px] cursor-pointer relative"
    @click="router.push(`/product/${product.id}`)"
  >
    <Button class="h-11 w-11 rounded-full bg-[#5454544D] absolute top-1 right-1">
      <Icon name="silver-favorite-icon" />
    </Button>
    <img src="/public/images/card-phone.png" alt="no image" />
    <p class="mt-3 font-medium text-xs lg:text-sm">{{ product.title }}</p>
    <Rating :rated-count="product.ratesCount" :rating="product.rating" />
    <div class="flex items-center mt-6">
      <p class="text-[#979797] line-through text-sm lg:text-base">{{ product.price }} ₸</p>
      <span class="bg-[#F63B00] px-[6px] py-[1px] ml-2 text-white rounded-[50px] text-xs">
        -{{ product.discount }}%
      </span>
    </div>
    <div class="block justify-between lg:flex">
      <div class="text-[#322F38] text-[20px] mt-3 lg:text-[32px] font-bold">
        {{ product.discountPrice }} ₸
      </div>
      <Button class="h-11 bg-default mt-3 w-full lg:w-11 lg:mt-0">
        <Icon name="basket-icon" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type TProductProps } from '@/entities/products'
import { Icon } from '@/shared/ui'
import { Button } from '@/shared/ui'
import { Rating } from '@/entities/products'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<TProductProps>()
</script>
