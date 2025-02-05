<script setup>

//Define a Vue Prop which allows external properties to be used when declaring any Player component
const props = defineProps({
    username: String,
    opponent: Boolean
}) 
</script>

<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=person" />

    <div id="player">
        <span class="material-symbols-outlined icon">person</span>
        <div>{{ props.username }}</div> <!-- Passes value of username -->
        <button v-if="props.opponent"  @click="invite">Invite</button>
    </div>
</template>

<style scoped>
#player {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vh;
    height: 5vh;
    border: 2px solid red;
}

.icon {
    margin-right: 2vh;
}
</style>