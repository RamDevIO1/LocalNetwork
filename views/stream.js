let socket = io('/')
socket.on("connect", () => {});

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  socket.emit('stream', stream);
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
}

const videoElement = document.querySelector('video');

socket.on('live-stream', (stream) => {
  videoElement.srcObject = stream;
})