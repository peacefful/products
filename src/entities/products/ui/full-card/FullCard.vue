<template>
  <div v-if="product" class="mt-8">
    <h1 class="text-[32px] font-medium">{{ product.title }}</h1>
    <Rating class="mt-3" :rated-count="product.ratesCount" :rating="product.rating" />
    <div class="mt-5 flex flex-wrap gap-6">
      <div
        class="w-full xl:w-[746px] h-[636px] flex justify-center items-center border border-baseSilver rounded-2xl"
      >
        <img src="/public/full-card-phone.png" alt="not image" />
      </div>
      <div class="flex flex-col justify-between w-full xl:max-w-[526px] text-base leading-[22.4px]">
        <div>
          <p>
            {{ product.description }}
          </p>
          <div class="mt-8">
            <h2 class="font-semibold">О товаре</h2>
            <div v-for="data in datas" :key="data.id">
              <div class="mt-3">
                <div class="grid grid-cols-2 gap-x-48">
                  <p class="text-[#6A707C]">{{ data.title }}</p>
                  <p class="font-semibold text-left">{{ data.value }}</p>
                </div>
                <hr class="h-[1px] bg-baseSilver w-full mt-3" />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 bg-[#FFFFFF] shadow-3xl rounded-2xl p-4">
          <div class="flex items-end gap-4">
            <strong class="text-[28px] leading-none">{{ product.discountPrice }} ₸</strong>
            <p class="text-[#979797] line-through leading-none">{{ product.price }}₸</p>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <BuyButton @open-modal="modalStore.openModal" class="text-white w-full h-[59px]" />
            <CardFavoriteButtonCard />
          </div>
          <SuccessModal />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rating } from '@/entities/products'
import { handleProductsСharacteristic } from '@/entities/products'
import { CardFavoriteButtonCard } from '@/features/products'
import { BuyButton } from '@/features/products'
import { SuccessModal } from '@/widgets/success-modal'
import { useModalStore } from '@/entities/products'
import { computed } from 'vue'
import { type TProductProps } from '@/entities/products'

const { product } = defineProps<TProductProps>()

const modalStore = useModalStore()

const datas = computed(() => {
  if (product) return handleProductsСharacteristic(product)
})
</script>
