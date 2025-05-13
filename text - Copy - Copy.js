const camerafeed = document.getElementById("camerafeed");

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    camerafeed.srcObject = stream;
  })
  .catch(error => {
    console.error("Error accessing camera: ", error);
  });