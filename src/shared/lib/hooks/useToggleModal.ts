import { ref } from 'vue'

export const useToggleModal = () => {
  const isOpenModal = ref<boolean>(false)

  const openModal = () => {
    console.log('123')

    isOpenModal.value = true
  }
  const closeModal = () => (isOpenModal.value = false)

  return { isOpenModal, openModal, closeModal }
}
