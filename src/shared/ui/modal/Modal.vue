<template>
  <div
    @click="$emit('closeModal')"
    class="h-screen w-full fixed left-0 top-0 bg-[#41465233] flex justify-center items-center"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
</script>
