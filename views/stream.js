const socket = io('/stream')

const btntest = document.querySelector('#test')

btntest.addEventListener('click', function() {
  socket.emit('test', "berhasil")
})