<script setup>
import { useRouter } from 'vue-router'
import { players } from '../websocket'
import Player from './Player.vue'

const router = useRouter()

//Get anime image 
fetch('http://127.0.0.1:5000')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
            const image_url = data[index]['image_url']
            var image = document.createElement("img");
            var imageParent = document.getElementById("images");
            image.src = image_url
            image.width = '239.25'
            image.height = '337.5'
            imageParent.appendChild(image);

        }
    });

const leave = () => {
    router.push('/')
}
</script>


<template>
    <div id="images"></div>
    <button @click="leave">Leave</button>
    <input type="text" v-model="username" placeholder="Guess!">

    <div id="players">
        <ul v-for="item in players">
            <Player :username=item.name></Player>
        </ul>
    </div>


</template>


<style scoped>
#players {
    display: flex;
    flex-direction: column;
}

ul {
    list-style: none;
    padding: 0;
}
</style>