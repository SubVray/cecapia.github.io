const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`losten on port: ${port}`)
// app.use(express.json());
// app.post("/data", (req, res) => {
//   const newData = new Data({
//     phoneNumber: req.body.phoneNumber,
//     cedula: req.body.cedula,
//     firma: req.body.firma,
//     frontImg: req.body.frontImg,
//     backImg: req.body.backImg,
//   });
//   newData.save((error) => {
//     if (error) {
//       res.status(500).send(error);
//     } else {
//       res.status(200).send("Data saved successfully!");
//     }
//   });
// });

// // Iniciar el servidor en el puerto 5000
// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });
