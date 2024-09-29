<template>
  <Modal @close-modal="modalStore.closeModal" v-if="modalStore.isOpenModal">
    <div
      class="w-full h-[470px] bg-[#FFFFFF] rounded-[16px] mt-auto p-3 md:w-[376px] md:mt-0 md:h-[270px]"
    >
      <div class="flex justify-end">
        <div v-if="windowWidth <= 767">
          <Button @click="modalStore.closeModal" class="bg-white">
            <MobileCloseIcon />
          </Button>
        </div>
        <div v-else>
          <Button @click="modalStore.closeModal" class="rounded-[66px]">
            <DesktopCloseIcon />
          </Button>
        </div>
      </div>
      <div class="flex flex-col items-center pt-24 md:pt-0">
        <div>
          <img class="h-28 w-28" src="/public/basket-image.png" alt="not image" />
        </div>
        <strong class="text-[24px] font-bold pt-8"> Спасибо за заказ!</strong>
        <p class="text-base text-[#6A707C] mt-3">Уже собираем</p>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from '@/shared/ui'
import { Button } from '@/shared/ui'
import { useModalStore } from '@/entities/products'
import { useWindowWidth } from '@/entities/products'
import { DesktopCloseIcon } from '@/shared/assets'
import { MobileCloseIcon } from '@/shared/assets'

const { windowWidth } = useWindowWidth()

const modalStore = useModalStore()
</script>
