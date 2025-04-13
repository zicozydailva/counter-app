<template>
  <div class="home">
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.decrement">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <hr />
    <div>
      <p>The counter is: {{ storeCounter.oddOrEven }}</p>
    </div>

    <div>
      <button @click="storeCounter.reset">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()


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
