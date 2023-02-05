const canvas = document.querySelector("canvas");
const clearButton = document.querySelector("#clear");
const saveButton = document.querySelector("#save");
const textCedula = document.querySelector("#text-cedula");

const signaturePad = new SignaturePad(canvas, {
  minWidth: 1,
  maxWidth: 1,
  penColor: "blue",
});

clearButton.addEventListener("click", function () {
  signaturePad.clear();
});

saveButton.addEventListener("click", function () {
  const dataURL = signaturePad.toDataURL();
  const user = {
    cedula: textCedula.value,
    firma: dataURL,
  };
  console.log(dataURL);
  // Save dataURL to database or send to server
});




