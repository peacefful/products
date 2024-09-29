<template>
  <Button @click="openModal" class="text-2xl bg-default">Купить</Button>
</template>

<script setup lang="ts">
import { Button } from '@/shared/ui'
import { useModalStore } from '@/entities/products'

const { openModal } = useModalStore()
</script>
