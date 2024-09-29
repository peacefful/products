<template>
  <div
    @click="toggleDropdown"
    class="border border-baseSilver rounded-2xl flex justify-between flex-wrap gap-8 py-3 px-5 mt-6 cursor-pointer relative"
  >
    <div class="block sm:flex gap-8">
      <h2>Сортировать:</h2>
      <div class="block sm:flex gap-4">
        <div
          v-if="windowWidth > 1000"
          class="text-[#6A707C]"
          v-for="filter in filterList"
          :key="filter.id"
        >
          <p
            @click="selectValue(filter.value)"
            :class="{ 'text-default': currentValue === filter.value }"
            class="cursor-pointer"
          >
            {{ filter.title }}
          </p>
          <div v-if="currentValue === filter.value" class="bg-default h-[2px] w-auto"></div>
        </div>
        <div v-else>
          <div class="w-full text-default opacity-100">
            {{ getCurrentTitleFilterFromValue?.title }}
          </div>
        </div>
      </div>
    </div>
    <Button v-if="windowWidth < 1000">
      <ArrowSelectIcon />
    </Button>
    <div
      v-if="isDropdownVisible"
      class="absolute top-full left-0 w-full mt-2 bg-white border rounded-lg shadow-lg z-10"
    >
      <ul>
        <li
          v-for="filter in filterList"
          :key="filter.id"
          @click="selectValue(filter.value)"
          class="cursor-pointer py-2 px-4 hover:bg-gray-100"
        >
          {{ filter.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storage } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { FILTER_VALUES } from '@/entities/products'
import { getCurrentTitleFromFilter } from '@/entities/products'
import { useWindowWidth } from '@/entities/products'
import { ref, computed } from 'vue'
import { type TFilter } from '@/entities/products'
import { watch } from 'vue'
import { useProductsStore } from '@/entities/products'
import { ArrowSelectIcon } from '@/shared/assets'

const productsStore = useProductsStore()

const { windowWidth } = useWindowWidth()

const currentValue = ref<string>(storage.getData('filterName') || 'byPopularity')
const isDropdownVisible = ref<boolean>(false)
const filterList = ref(FILTER_VALUES)

watch(windowWidth, () => {
  if (windowWidth.value > 1000) {
    isDropdownVisible.value = false
  }
})

const toggleDropdown = () => {
  if (windowWidth.value < 1000) {
    isDropdownVisible.value = !isDropdownVisible.value
  }
}

const getCurrentTitleFilterFromValue = computed(() => {
  const filterData: TFilter = {
    filterValues: filterList.value,
    currentValue: currentValue.value
  }

  return getCurrentTitleFromFilter(filterData)
})

const selectValue = (value: string) => {
  currentValue.value = value
  storage.setData('filterName', currentValue.value)
  productsStore.sortedData(currentValue.value)
}
</script>
