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
// const frontInput = document.querySelector("#front-input");
// const backInput = document.querySelector("#back-input");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const frontFile = frontInput.files[0];
//   const backFile = backInput.files[0];

//   // Do something with files (e.g. send to server)
// });

const form = document.querySelector("#upload-form");
const cameraBox = document.querySelector("#camera-box");
const cameraStream = document.querySelector("#camera-stream");
const captureButton = document.querySelector("#capture-button");
const frontInput = document.querySelector("#front-input");
const backInput = document.querySelector("#back-input");
const switchButton = document.querySelector("#switch-button");

let isBack = false;

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  cameraStream.srcObject = stream;
  cameraStream.play();
}

captureButton.addEventListener("click", function () {
  const canvas = document.createElement("canvas");
  canvas.width = cameraStream.videoWidth;
  canvas.height = cameraStream.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(cameraStream, 0, 0);

  const photo = canvas.toDataURL("image/jpeg");

  if (isBack) {
    backInput.value = photo;
  } else {
    frontInput.value = photo;
  }
});

switchButton.addEventListener("click", function () {
  isBack = !isBack;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const front = frontInput.value;
  const back = backInput.value;

  console.log(front);
  console.log(back);

  // Do something with front and back (e.g. send to server)
});

startCamera();
