const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);


app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (req, rsp) => {
  res.render("index");
});

app.get("/stream/:id", (req, res) => {
  res.render("stream", { Id: req.params.id });
});

app.get("/watch/:id", (req, res) => {
  res.render("watch", { Id: req.params.id });
});

io.on("connection", (socket) => {
  console.log(`Made socket connection with ${socket.id}}`);
  
});

server.listen(process.env.PORT || 3030);
