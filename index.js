const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOption = { origin: "http://localhost:3000" };
const Reservation = require("./model/reservationSchema");
const db = process.env.MONGODB_URL

// mongodb://localhost/Hotel
mongoose
  .connect(db || "mongodb+srv://hola:qwert@dukehotel-6zccm.mongodb.net/duke?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
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

app.get("/", (req, res) => {
  res.send("Successful Deployment");
});

app.get("/reservations", (req, res) => {
  Reservation.find({}, (err, reservations) => {
    if (err) {
      return err;
    } else {
      res.send(reservations);
      return reservations;
    }
  });
});

app.post("/add_reservation", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    age,
    address,
    reasonForStay,
    duration
  } = req.body;
  const newReservation = await new Reservation({
    firstName,
    lastName,
    email,
    phone,
    age,
    address,
    reasonForStay,
    duration
  });
  newReservation
    .save()
    .then(newRes => {
      console.log("Saved");
      res.send(newRes);
    })
    .catch(err => {
      console.log("Error", err);
    });
});

app.delete("/deleteAll", (req, res) => {
  Reservation.deleteMany({}, (err, removed) => {
    if (err) {
      return err;
    } else {
      res.send(removed);
    }
  });
});

app.delete("/deleteOne/:id", (req, res) => {
  console.log(req.params);
  Reservation.findByIdAndRemove(req.params.id, (err, removed) => {
    if (err) {
      return err;
    } else {
      res.send(removed);
    }
  });
});

app.put("/update-reservation/:id", (req, res) => {
  console.log(req.params);
  Reservation.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
    if (err) {
      return err;
    } else {
      console.log(updated);
      res.send(updated);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
