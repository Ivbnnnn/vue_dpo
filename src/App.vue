<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Child from './components/Child.vue';
import { ref } from 'vue';
import Modal from './components/Modal.vue';

const parentMessage = ref('Привет из родителя');

function handleChildClick(payload) {
  console.log('Родитель получил данные:', payload);
}
const isOpen = ref(false)
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <nav>
    
    <RouterLink to="/">Главная</RouterLink>
    <br>
    <RouterLink to="/counter">Counter</RouterLink>
    <br>
    <RouterLink to="/vfor">V-FOR</RouterLink>
    <br>
    <RouterLink to="/computed">Computed</RouterLink>
    <br>
    <RouterLink to="/ControlledInput">ControlledInput</RouterLink>
    <br>
    <RouterLink to="/DinamicCSS">DinamicCSS</RouterLink>
  </nav>

  <RouterView />
  
  
  <h1>Родительский компонент</h1>
  <Child class="child" :message="parentMessage" @childClicked="handleChildClick" />
  
  
  
  
  <button @click = "openModal">Открыть модальное окно</button>
  <Modal @close="closeModal" v-if="isOpen">
    <template #main>
      <h2>Подтвердите действие</h2>
    </template>
  <p>Вы уверены, что хотите удалить запись?</p>
  </Modal>

</template>

<style scoped>

</style>