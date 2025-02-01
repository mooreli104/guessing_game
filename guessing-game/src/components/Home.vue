<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { socket } from '../websocket'


// Uses router from main.js to push Lobby page
const router = useRouter()
const username = ref(''); //username is linked with v-model = "username"

const goToLobby = () => {
  // router.push({ name: 'lobby', params: { username: username.value } })
  router.push("/lobby")
  socket.emit("join-lobby", username.value)
}
</script>

<template>

  <input type="text" v-model="username" placeholder="Enter a nickname!">
  <button type="submit" value="Start" @click="goToLobby">Start</button>

</template>

<style scoped></style>
