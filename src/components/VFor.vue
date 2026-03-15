<template>
<div class="wrapper">
    <ul>
        <li v-for="item in items" :key="item.id">
            <h1>{{item.id}}</h1>
            <h2>{{item.title}}</h2>
        </li>
    </ul>
    
</div>
</template>

<script setup>
import { ref } from 'vue'

const items = [
    {id:1, title:"Vue"}, {id:2, title:"React"}
]

</script>




<style scoped>
.wrapper {
background-color: black;
color: white;
}
</style>
