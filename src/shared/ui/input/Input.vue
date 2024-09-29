<template>
  <input class="w-full" type="text" v-model="value" v-bind="$attrs" :placeholder />
</template>

<script setup lang="ts">
type TInput = {
  placeholder?: string
}

defineProps<TInput>()

const value = defineModel<string>('value')
</script>
