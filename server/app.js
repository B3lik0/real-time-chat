const app = require("express")();
const http = require("http").createServer(app);
const PORT = 3000;

const config = {
  cors: true,
  origins: "http://localhost:5173",
};

const io = require("socket.io")(http, config);

http.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

io.on("connection", (socket) => {
  console.log("socket connection opened:", socket.id);

  socket.on("chat:message", function (data) {
    io.sockets.emit("chat:message", data);
  });

  socket.on("chat:typing", function (data) {
    socket.broadcast.emit("chat:typing", data);
  });
});
