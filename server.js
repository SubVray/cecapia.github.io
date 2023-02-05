const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const URI =
  "mongodb+srv://SubVray:jim123@cluster0.6puj5ox.mongodb.net/?retryWrites=true&w=majority";

// Conectar a la base de datos MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el esquema para el modelo de datos
const dataSchema = new mongoose.Schema({
  phoneNumber: { type: String, unique: true },
  cedula: { type: String, unique: true },
  firma: { type: String },
  frontImg: { type: String },
  backImg: { type: String },
});

// Crear el modelo de datos a partir del esquema
const Data = mongoose.model("Data", dataSchema);

// Configurar Express para recibir y procesar solicitudes POST
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.post("/data", (req, res) => {
  const newData = new Data({
    phoneNumber: req.body.phoneNumber,
    cedula: req.body.cedula,
    firma: req.body.firma,
    frontImg: req.body.frontImg,
    backImg: req.body.backImg,
  });
  newData.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Data saved successfully!");
    }
  });
});

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
