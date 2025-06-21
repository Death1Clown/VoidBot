// server.js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let users = [];

app.use(express.static("public")); // Serve your HTML files

io.on("connection", (socket) => {
  socket.on("user-joined", (data) => {
    users.push({ id: socket.id, page: data.page });
    io.emit("update-users", users);
  });

  socket.on("page-changed", (page) => {
    const user = users.find(u => u.id === socket.id);
    if (user) user.page = page;
    io.emit("update-users", users);
  });

  socket.on("disconnect", () => {
    users = users.filter(u => u.id !== socket.id);
    io.emit("update-users", users);
  });
});

http.listen(3000, () => console.log("Server running on http://localhost:3000"));
