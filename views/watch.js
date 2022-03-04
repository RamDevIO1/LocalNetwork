const socket = io('/stream')

const p = document.querySelector('p')

socket.on('test', (a) => {
  console.log(a)
  p.innerText = a
})