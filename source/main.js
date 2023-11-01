const localVideo = document.getElementById("localVideo");
const remoteVideos = document.getElementById("remoteVideos");
const startButton = document.getElementById("startButton");

let localStream = null;

startButton.addEventListener("click", () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
            localStream = stream;
            localVideo.srcObject = stream;
        })
        .catch((error) => {
            console.error("Error accessing camera and microphone: " + error);
        });
});
