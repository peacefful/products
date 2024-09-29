<template>
  <Header class="px-5" />
  <div class="mt-5 px-5 text-base">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/widgets/header'
</script>
