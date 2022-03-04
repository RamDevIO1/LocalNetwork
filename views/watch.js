let socket = io('/')
socket.on("connect", () => {});

const videoElement = document.querySelector('video');

socket.on('live-stream', (stream) => {
  videoElement.srcObject = stream;
})