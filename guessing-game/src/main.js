import './assets/main.css'


//Import VueRouter dependents
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

//Import Vue components
import App from './App.vue'
import HomePage from './components/Home.vue'
import LobbyPage from './components/Lobby.vue'
import GamePage from './components/Game.vue'

//Define routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/lobby/:username', name: 'lobby', component: LobbyPage }, // :username means that username is a parameter
    { path: '/game', name: 'game', component: GamePage },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

createApp(App).use(router).mount('#homepage')