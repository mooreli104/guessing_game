<script setup>
import Player from './Player.vue'

import { useRouter } from 'vue-router'
  
  // Uses router from main.js to push Lobby page
  const router = useRouter()
  const goToHome = () => {
    router.push('/')
  }
  const goToGame = () => {
    router.push('/game')
  }

</script>

<template>
    <button @click = "goToHome">HOME</button>

    <div>
    <Player username = 'username'></Player>
    <Player></Player>
    <Player></Player>
    <Player></Player>
    <Player></Player>
    </div>
    
    <button @click = "goToGame">Start Game</button>
</template>

<style scoped>


</style>