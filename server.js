// const express = require("express");
// const { Server } = require("socket.io");
// const { createServer } = require("http");
// const cors = require("cors");
// const { log } = require("console");

// const app = express();

// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST"],
//   })
// );

// app.get("/", (req, res) => {
//   res.send(`<h1>i am web socket</h1>`);
// });

// io.on("connection", (socket) => {
//   console.log(`user is connected`);
//   console.log(socket.id);

//   socket.on("message", ({ message, room }) => {
//     console.log(message);
//     io.to(room).emit("rec-msg", message);
//   });

//   socket.on("join", (d) => {
//     console.log(d)
//     socket.join(d);
//   });
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`app listing ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();

app.use(cors());

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1> I am socket.io</h1>");
});


const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on("connection", (socket) => {
  socket.emit("join", "your are connected with this id ", socket.id);
  console.log(`user is connected ${socket.id}`)
});

server.listen(4000, () => console.log(`server is runnig on port ${4000}`));
