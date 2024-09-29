<template>
  <div class="bg-white rounded-[50px] w-full max-w-[636px] flex px-4 p-2">
    <Input class="text-base" placeholder="Поиск товара" v-model:value="search" />
    <SearchIcon />
  </div>
</template>

<script setup lang="ts">
import { Input, Icon } from '@/shared/ui'
import { ref, watch } from 'vue'
import { useProductsStore } from '@/entities/products'
import { SearchIcon } from '@/shared/assets'

const productStore = useProductsStore()

const search = ref<string>('')

watch(search, () => productStore.searchProduct(search.value))
</script>
