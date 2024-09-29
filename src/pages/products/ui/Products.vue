<template>
  <main class="wrapper ">
    <Category product="" />
    <Filter />
    <ProductsList />
  </main>
</template>

<script setup lang="ts">
import { ProductsList } from '@/widgets/products-list'
import { Category } from '@/entities/products'
import { Filter } from '@/features/products'

</script>
