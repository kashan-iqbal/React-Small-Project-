const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

io.on("connection", (socket) => {
  console.log(`user is connected`);
  console.log(socket.id);

 socket.broadcast.emit("msg","i am the web soket now")

});

app.get("/", (req, res) => {
  res.send(`<h1>i am web socket</h1>`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`app listing ${PORT}`);
});
