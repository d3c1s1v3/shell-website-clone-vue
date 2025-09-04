import { ref } from 'vue'

export const useToggle = () => {
  const currentIndex = ref<number>()
  const isOpen = ref<boolean>(false)

  const toggle = (index: number) => {
    if (currentIndex.value === index) {
      isOpen.value = !isOpen.value
    } else {
      currentIndex.value = index
      isOpen.value = true
    }
  }
  return { currentIndex, isOpen, toggle }
}
