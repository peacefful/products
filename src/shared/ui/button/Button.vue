<template>
  <button @click="$emit('click')" class="flex justify-center items-center rounded-xl">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
