import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";


const app = express();
const server = createServer(app);
let img_url = ""
let players = [] 


async function getImageURL() {
  const url = "http://127.0.0.1:5000";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    img_url = json[0]['image_url']
    io.to('room1').emit("send-to-game", {route: '/game', url: img_url})
  } catch (error) {
    console.error(error.message);
  }

}

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Vue.js app URL
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true, //Need for developement, authenticates communication between servers
  },
  allowEIO3: true //Allows communication between mismatch SocketIO client and server versions
});

app.use(cors());
app.get("/", (req, res) => {
  res.send("Socket.IO Server is Running");
});


io.on("connection", (socket) => {

  /*
   * Defines an event listener for "join-lobby" event and recieves "username". Once the server 
   * hears a "join-lobby" event, it will add the client to a room and push client 
   * details to the "players" array with socket.id and username. Lastly, emits an
   * event called "connected" to all users in the room.
   */
  socket.on("join-lobby", (username) => {
    socket.join("room1");
    players.push({
      id: socket.id,
      name: username
    })
    io.to('room1').emit("connected", players)
  })

  /*
   * Defines an event listener for "disconnect" event. When a client disconnects,
   * the server will filter the "players" array and keep all clients that do not
   * share the same socket.id as the client who disconnected from the server. Then,
   * The server emits a "disconnected" event to all players in "room1" with the newly
   * updated "players" array.
   */
  socket.on("disconnect", () => {
    players = players.filter((player) => player.id !== socket.id)
    io.to('room1').emit("disconnected", players)

  });

  /*
   * Defines an event listener for the "start-game" event. When "start-game"
   * is emitted, emit 2 events called "connected" and "send-to-game.""
   */
  socket.on("start-game", (playing_players) => {
    io.to('room1').emit("connected", playing_players)
    getImageURL()   
  });


});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
