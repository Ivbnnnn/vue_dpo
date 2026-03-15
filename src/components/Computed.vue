<template>
  <div class="wrapper">
    <h2>Завершённые задачи:</h2>
    <ul>
      <li v-for="task in completedTasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Список задач
const tasks = ref([
  { id: 1, title: 'Купить монитор', completed: true },
  { id: 2, title: 'Купить машину', completed: false },
  { id: 3, title: 'Проект на vue', completed: true }
])

// Вычисляемое свойство для завершённых задач
const completedTasks = computed(() => {
  return tasks.value.filter(task => task.completed)
})
</script>

<style scoped>

</style>
