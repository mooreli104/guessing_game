<script setup>
import {state} from "../websocket"
import { ref } from 'vue'


const name = ref(state.name)
// const props = defineProps(['username'])
</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=person" />

    <div id = "player">
        <span class="material-symbols-outlined icon">person</span>
        <div>{{ name }}</div>
    </div>
</template>

<style scoped>
#player{
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 20vh;
    height: 5vh;
    border: 2px solid red;
}

.icon{
    margin-right: 2vh;
}

</style>