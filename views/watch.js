let socket = io('/')
var a = 'yes'
socket.on("connect", () => {
  alert(socket); // true

});


const p = document.querySelector('p')

setInterval(() => {
  socket.on('abc', (a) => {
  console.log(a)
  p.innerText = a
})
}, 1000)
