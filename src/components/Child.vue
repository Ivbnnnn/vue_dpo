<template>
  <p>{{ message }}</p>
  <p>Значение в инпуте: {{ inputMessage }}</p>
  <input type="text" v-model="inputMessage" placeholder="Введите что-нибуд">
  <button @click="notifyParent">Нажми меня</button>


</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const inputMessage = ref('')
const props = defineProps({
  message: String
});

const emit = defineEmits(['childClicked']);

function notifyParent() {
  if (inputMessage.value === ""){
    alert("Введите значени!")
  }else{
    emit('childClicked', inputMessage.value);
  }
  
}
</script>

<style scoped>
</style>
