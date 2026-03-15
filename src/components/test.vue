
<template>
  <div class="wrapper">
    <h1>{{ info }}</h1>
    <button @click="changeInfo">кликни</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const info = ref("1223")

function changeInfo() {
  info.value = "333"
}
</script>




<style scoped>

</style>
