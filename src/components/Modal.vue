<template>
  <div class="modal">
    <div class="modal-content">
      <slot name="main"></slot>
      <slot></slot> 
      <button @click="$emit('close')">Закрыть</button>
    </div>
  </div>
</template>
