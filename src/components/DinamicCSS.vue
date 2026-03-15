<template>
  <div class="wrapper">
    <button :class="{ active: isActive, inactive: !isActive }" @click="f">
  Кнопка
</button>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)

function f() {
  isActive.value = !isActive.value
}
</script>

<style scoped>

.active {
  color: red;
}
.inactive {
  color: green;
}
</style>
