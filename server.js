const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const uri =
  "mongodb+srv://SubVray:jim123@cluster0.6puj5ox.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json({ limit: "5000mb" }));

mongodb.MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log(error);
      return;
    }

    const db = client.db("test");
    app.post("/data", (req, res) => {
      db.collection("data").insertOne(req.body, (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }

        res.status(201).send();
      });
    });
  }
);

app.listen(5000, () => {
  console.log("Server started");
});
