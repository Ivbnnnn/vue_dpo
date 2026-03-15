<template>
<div class="wrapper">
    <h1>Значение счетчика: {{ value }}</h1>
    <button @click="increment">кликни</button>
</div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)

function increment() {
value.value++;
}
</script>




<style scoped>

</style>
