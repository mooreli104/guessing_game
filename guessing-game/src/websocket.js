import { ref } from "vue"
import io from "socket.io-client"
import { router } from "./main"



// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);
export let state;
export let players = ref([])
export let img_url = ref("")
export let rank = ref()
export let opponents = ref([])

socket.on("connected", (server_players) => {
  players.value = server_players
  opponents.value = server_players.filter((player) => player.id !== socket.id)

})

socket.on('disconnected', (server_players) => {
  players.value = server_players
  opponents.value = server_players.filter((player) => player.id !== socket.id)
})

socket.on('start-game', (playing_players) => {
  players.value = playing_players
  opponents.value = playing_players.filter((player) => player.id !== socket.id)
})

socket.on("send-to-game", (object) => {
  img_url.value = object.url
  rank.value = object.rank
  router.push(object.route)
})

