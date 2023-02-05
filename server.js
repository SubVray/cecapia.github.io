const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://SubVray:jim123@cluster0.6puj5ox.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);
  const db = client.db("test");
  console.log("Connected to MongoDB");

  app.get("/api/data", (req, res) => {
    db.collection("data")
      .find({})
      .toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
      });
  });

  app.post("/api/data", (req, res) => {
    const data = req.body;
    db.collection("data").insertOne(data, (err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
  });

  app.listen(5000, () => {
    console.log("Server is listening on port 5000");
  });
});
