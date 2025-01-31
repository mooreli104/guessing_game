<script setup>
import Player from './Player.vue'
import { useRouter } from 'vue-router'

// import io from 'socket.io-client'
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
    <Player></Player>
    <Player></Player>
    <Player></Player>
    <Player></Player>
    <Player></Player>
    </div>
    
    <button @click = "goToGame">Start Game</button>
    <!-- <button @click = "invite">Invite</button> -->
</template>

<style scoped>


</style>