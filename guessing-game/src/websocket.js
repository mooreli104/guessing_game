import { ref } from "vue"
import io from "socket.io-client"

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);
export let state;
export let players = ref([])

socket.on("connected", (server_players) => {
  players.value = server_players
})

socket.on('disconnected', (server_players) => {
  players.value = server_players
})

socket.on('start-game', (playing_players) => {
  players.value = playing_players
})
