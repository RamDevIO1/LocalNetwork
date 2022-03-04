let socket = io('/')
socket.on("connect", () => {});
const videoElement = document.querySelector('video');


function gotStream(stream) {
  window.stream = stream; // make stream available to console
  
  setInterval(() => {
    socket.emit('stream', '12345');
  }, 1)
  
  //videoElement.srcObject = stream;
  //audio.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}


function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  const constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: 'environment'
      }
    }
  };
  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);

  socket.on('live', (stream) => {
  alert(stream)
//videoElement.srcObject = stream;
})
}
start()
