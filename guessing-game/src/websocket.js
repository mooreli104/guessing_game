import { ref } from "vue"
import io from "socket.io-client"
import { router } from "./main"



// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);
export let state;
export let players = ref([])
export let img_url = ref("")

socket.on("connected", (server_players) => {
  players.value = server_players
})

socket.on('disconnected', (server_players) => {
  players.value = server_players
})

socket.on('start-game', (playing_players) => {
  players.value = playing_players
})

socket.on("send-to-game", (object) => {
  img_url.value = object.url
  router.push(object.route)
})
