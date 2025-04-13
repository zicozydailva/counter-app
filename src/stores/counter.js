import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // STORE
  const count = ref(0)

  // ACTIONS
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  // GETTERS
  const oddOrEven = computed(() => {
    return count.value % 2 === 0 ? 'even' : 'odd'
  })

  return { count, increment, decrement, reset, oddOrEven }
})
 