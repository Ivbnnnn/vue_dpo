<template>
  <div class="wrapper">
    <h1>{{ searchQuerry }}</h1>
    <input type="text" v-model="searchQuerry" placeholder="TEXT">

  </div>
</template>

<script setup>
import { ref } from 'vue'
const searchQuerry = ref('TEXT')

</script>

<style scoped>

</style>
