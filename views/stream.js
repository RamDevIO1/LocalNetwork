const socket = io('/stream')

const btntest = document.querySelector('#test')

btntest.addEventListener('click', function() {
  socket.emit('test', "berhasil")
})

const p = document.querySelector('p')

socket.on('test', (a) => {
  console.log(a)
  p.innerText = a
})