const express = require("express");
const ejs = require("ejs");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/stream", (req, res) => {
  res.render("stream");
});

app.get("/watch", (req, res) => {
  res.render("watch");
});

io.on("connection", (socket) => {
  console.log(`Made socket connection with ${socket.id}}`);

});

server.listen(process.env.PORT || 3030);