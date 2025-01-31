import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Vue.js app URL
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true,
  },
  allowEIO3: true
});

app.use(cors());
app.get("/", (req, res) => {
  res.send("Socket.IO Server is Running");
  
});


const players = [];
// Handle socket connection
io.on("connection", (socket) => {

  socket.join("room")
  console.log(`User connected: ${socket.id}`);
  socket.on("username", (data) => {
    socket.emit("sendUsername", data)
  })


  // socket.on("message", (data) => {
  //   console.log(`Received message: ${data}`);
  //   io.emit("message", data); // Broadcast to all clients
  // });


  // socket.on("disconnect", () => {
  //   console.log(`User disconnected: ${socket.id}`);
  // });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
