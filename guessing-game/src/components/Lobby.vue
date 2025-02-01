<script setup>

import Player from './Player.vue'
import { useRouter } from 'vue-router'
import { players } from '../websocket'
import { socket } from '../websocket'

const router = useRouter() // Uses router from main.js to push Lobby page


const goToHome = () => {
  router.push('/')
}

const goToGame = () => {
  socket.emit("start-game", players.value) // Emits an event called "start-game"
}

</script>

<template>
  <div id="container">
    <button @click="goToHome">HOME</button>
    <div id="players">
      <ul v-for="item in players"> <!-- Vue directive v-for renders all items in import players array -->
        <Player :username=item.name></Player> <!-- Creates a Player component with v-bind:username = item.name -->
      </ul>
    </div>

    <button @click="goToGame">Start Game</button>
    <!-- <button @click = "invite">Invite</button> -->
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#players {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  padding: 0;
}
</style>