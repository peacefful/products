<template>
  <div
    @click="$emit('closeModal')"
    class="h-screen w-full fixed left-0 top-0 flex justify-center items-center"
  >
    <div class="absolute inset-0 bg-[#41465233] backdrop-blur-sm"></div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['closeModal'])
</script>
