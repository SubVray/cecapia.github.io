const express = require("express");
const mongodb = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Conectarse a MongoDB
const uri =
  "mongodb+srv://SubVray:jim123@cluster0.6puj5ox.mongodb.net/?retryWrites=true&w=majority";
mongodb.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }

    const db = client.db("users");

    // Manejar solicitudes POST para agregar datos a MongoDB
    app.use(express.json());
    app.post("/api/data", (req, res) => {
      const data = req.body;
      db.collection("users").insertOne(data, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: "Algo salió mal" });
          return;
        }
        res.send({ message: "Datos guardados exitosamente" });
      });
    });

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
  }
);
