const socket = io()

const btntest = document.querySelector('#test')

btntest.addEventListener('click', function() {
  socket.emit('test', "berhasil")
})