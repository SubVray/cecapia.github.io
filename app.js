// const canvas = document.querySelector("canvas");
// const clearButton = document.querySelector("#clear");
// const saveButton = document.querySelector("#save");
// const textCedula = document.querySelector("#text-cedula");

// const signaturePad = new SignaturePad(canvas, {
//   minWidth: 1,
//   maxWidth: 1,
//   penColor: "blue",
// });

// clearButton.addEventListener("click", function () {
//   signaturePad.clear();
// });

// saveButton.addEventListener("click", function () {
//   const dataURL = signaturePad.toDataURL();
//   const user = {
//     cedula: textCedula.value,
//     firma: dataURL,
//   };
//   console.log(user);
//   // Save dataURL to database or send to server
// });

// const form = document.querySelector("#upload-form");
// const cameraBox = document.querySelector("#camera-box");
// const cameraStream = document.querySelector("#camera-stream");
// const captureButton = document.querySelector("#capture-button");
// const frontInput = document.querySelector("#front-input");
// const backInput = document.querySelector("#back-input");
// const switchButton = document.querySelector("#switch-button");

// let isBack = false;
// if (!isBack) {
//   console.log("parte frontal");
// } else {
//   console.log("parte trasera");
// }

// async function detectDeviceType() {
//   var isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     );

//   if (isMobile) {
//     console.log("Estás en un dispositivo móvil");
//     form.classList.toggle("d-none");
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: { facingMode: "user" },
//     });

//     cameraStream.srcObject = stream;
//     cameraStream.play();
//   } else {
//     console.log("Estás en un PC");
//     form.classList.toggle("d-none");
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: { facingMode: "environment" },
//     });

//     cameraStream.srcObject = stream;
//     cameraStream.play();
//   }
// }

// captureButton.addEventListener("click", function () {
//   const canvas = document.createElement("canvas");
//   canvas.width = cameraStream.videoWidth;
//   canvas.height = cameraStream.videoHeight;

//   const context = canvas.getContext("2d");
//   context.drawImage(cameraStream, 0, 0);

//   const photo = canvas.toDataURL("image/jpeg");

//   if (isBack) {
//     backInput.value = photo;
//   } else {
//     frontInput.value = photo;
//   }
// });

// switchButton.addEventListener("click", function () {
//   isBack = !isBack;
//   if (!isBack) {
//     document.getElementById("switch-button").innerHTML =
//       "Cambiar a la parte trasera";
//   } else {
//     document.getElementById("switch-button").innerHTML =
//       "Cambiar a la parte frontal";
//   }
// });

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const front = frontInput.value;
//   const back = backInput.value;
//   console.log(`front:${front} <br /> back:${back}`);

//   // Do something with front and back (e.g. send to server)
// });





const startCameraButton = document.querySelector("#start-camera");
const cameraStream = document.querySelector("#camera-stream");
const takePhotoButton = document.querySelector("#take-photo");
const photoContainer = document.querySelector("#photo-container");

startCameraButton.addEventListener("click", (event) => {
  navigator.mediaDevices
    .getUserMedia({
      video: { facingMode: "user"  },
    })
    .then((stream) => {
      cameraStream.srcObject = stream;
      cameraStream.style.display = "block";
    })
    .catch((error) => {
      console.error("Error al acceder a la cámara:", error);
    });
});

takePhotoButton.addEventListener("click", (event) => {
  const photo = new Image();
  photo.src = cameraStream.srcObject
    .getVideoTracks()[0]
    .getSettings().facingMode;
  photo.width = 400;
  photo.height = 300;
  photoContainer.appendChild(photo);
  photoContainer.style.display = "block";
});
