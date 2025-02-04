<script setup>
import { useRouter } from 'vue-router'
import { players } from '../websocket'
import { img_url } from '../websocket'
import Player from './Player.vue'

const router = useRouter()

const leave = () => {
    router.push('/')
}
</script>


<template>
    <button @click="leave">Leave</button>
    <div class="container">

    <div class="guess">
    <div id="images"><img :src="img_url" alt="anime_image"></div>
    <input type="text" v-model="username" placeholder="Guess!">
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