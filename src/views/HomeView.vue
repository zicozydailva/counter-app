<template>
  <div class="home">
    <div class="count">{{ count }}</div>
    <div class="buttons">
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
    <hr />
    <div>
      <p>The counter is: {{ oddOrEven }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const oddOrEven = computed(() => {
  return count.value % 2 === 0 ? 'even' : 'odd'
})
</script>

<style>
.home {
  text-align: center;
  margin-top: 60px;
}

.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
