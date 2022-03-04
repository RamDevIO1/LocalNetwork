let socket = io('/')
var a = 'yes'
socket.on("connect", () => {
  alert(socket); // true

});
const btntest = document.querySelector('#test')

btntest.addEventListener('click', function() {
  socket.emit('test', "berhasil")
})

const p = document.querySelector('p')

socket.on('abc', (a) => {
  console.log(a)
  p.innerText = a
})