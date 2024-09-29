<template>
  <img :src="`/public/images/${name}.svg`" alt="not image" />
</template>

<script setup lang="ts">
type TIcon = {
  name: string
}

defineProps<TIcon>()
</script>
