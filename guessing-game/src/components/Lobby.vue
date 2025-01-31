<script setup>
import Player from './Player.vue'

import { useRouter } from 'vue-router'
import { socket } from '../websocket'

// import io from 'socket.io-client'
  // Uses router from main.js to push Lobby page
  const router = useRouter()
  const username = ref("")

  const goToHome = () => {
    router.push('/')
  }
  const invite = () => {
    socket.emit("message", "Hello World!")
  }

  const getUsername = () => {
    socket.on("username", (data) => {
      return data
    })
  }

  username.value = getUsername


</script>

<template>
    <button @click = "goToHome">HOME</button>

    <div>
    <Player username.value></Player>
    <Player></Player>
    <Player></Player>
    <Player></Player>
    <Player></Player>
    </div>
    
    <button @click = "goToGame">Start Game</button>
    <button @click = "invite">Invite</button>
</template>

<style scoped>


</style>