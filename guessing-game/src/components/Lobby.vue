<script setup>

import Player from './Player.vue'
import { useRouter } from 'vue-router'
import { players, socket, opponents } from '../websocket'


const router = useRouter() // Uses router from main.js to push Lobby page


const goToHome = () => {
  router.push('/')
  socket.disconnect()
  location.reload()
}

const goToGame = () => {
  socket.emit("start-game", players.value) // Emits an event called "start-game"
}

const invitePlayers = () => {

}

</script>

<template>
  <div id="body">
  <div id="container">
    <button @click="goToHome">HOME</button>
    <div id="players">
      <ul v-for="item in players"> <!-- Vue directive v-for renders all items in import players array -->
        <template v-if="item.id === socket.id">
        <Player :username=item.name></Player> <!-- Creates a Player component with v-bind:username = item.name -->
      </template>
      </ul>
    </div>
    <div id="buttons">
      <button @click.once="goToGame"> Start Game</button>
      <button @click.once="invitePlayers"> Invite</button>
    </div>
  </div>
  <div id="opponents">
    <ul v-for="item in opponents">
      <Player :username=item.name :opponent=true></Player>
    </ul>
  </div>
</div>
  


</template>

<style scoped>

#body{
  display: flex;
  align-items: center;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 25%;
}

#opponents {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  padding: 0;
}
</style>