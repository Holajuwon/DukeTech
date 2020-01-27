const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOption = { origin: "http://localhost:3000" };

mongoose
  .connect(
    "mongodb+srv://hola:monehin@20@database-hgso4.mongodb.net/Todo?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(res => {
    console.log("connected");
  })
  .catch(err => {
    console.log({ err });
  });

const app = express();
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/todos", (req, res) => {
  Todo.find({}, (err, allTodo) => {
    if (err) {
      return err;
    } else {
      res.send(allTodo);
      return allTodo;
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
