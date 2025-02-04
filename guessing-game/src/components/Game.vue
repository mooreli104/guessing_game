<script setup>
import Player from './Player.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { players } from '../websocket'
import { img_url } from '../websocket'
import { socket } from '../websocket'

const router = useRouter()
const guess = ref('')

const leave = () => {
    router.push('/')
    socket.disconnect()
}

const make_guess = () =>{
    socket.emit("guess", guess.value)
}


</script>


<template>
    <button @click="leave">Leave</button>
    <div class="container">

    <div class="guess">
    <div id="images"><img :src="img_url" alt="anime_image"></div>
    <input type="text" v-model="guess" placeholder="Guess!">
    <button type="submit" value="Start" @click="make_guess">Guess</button>

</div>

    <div id="players">
        <ul v-for="item in players">
            <Player :username=item.name></Player>
        </ul>
    </div>
</div>
</template>


<style scoped>
.container{
    display: flex;
    
}
#players {
    display: flex;
    flex-direction: column;
}



ul {
    list-style: none;
    padding: 0;
}

image {
    width: '239.25';
    height: '337.5';
}
</style>