import { onMounted, onBeforeUnmount } from 'vue'

export const useCheckHeightScreen = (callBack: () => void) => {
  const onScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    if (scrollTop + windowHeight >= fullHeight - 10) {
      callBack()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
}
