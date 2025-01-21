<script setup>
import Start from './components/Start.vue'


fetch('http://127.0.0.1:5000')
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Output: "Hello from Python!"
    });
</script>


<template>
    <div class="game">
        <h1>Guess the Anime</h1>
        <Start>HELLO</Start>
        <button @click="anime = !anime">TOGGLE</button>
        <div v-if="anime">
            <img v-bind:src="anime.img_url"/>
            <input v-model="user_guess" placeholder="Your Guess"/>
            <button @click="check_answer">Check Answer</button>
        </div>
    </div>
</template>


<style scoped>


</style>

<!-- <script>
export default {
    data() {
        return {
            anime: null,
            user_guess: '',
        }
    }
}
methods: {
    async function fetch() {
        try {
            const response = await fetch('http://localhost:5174/random-anime');
            const data = await response.json();
            this.data = data;
        }
        catch (error) {
            console.error('Error fetching data:', error)
        }
    }
}
</script> -->