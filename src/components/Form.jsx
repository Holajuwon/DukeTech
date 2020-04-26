import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const Form = props => {
  const todoState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    reasonForStay: "",
    duration: ""
  };
  const [todo, setTodo] = useState(todoState);

  const handleChange = e => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
    console.log(todo);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://duketech-api.herokuapp.com/add_reservation", {
        firstName: todo.firstName,
        lastName: todo.lastName,
        email: todo.email,
        phone: todo.phone,
        age: todo.age,
        address: todo.address,
        reasonForStay: todo.reasonForStay,
        duration: todo.duration
      })
      .then(res => console.log("saved", res))
      .catch(err => {
        console.log(err);
      });
    setTodo(todoState);
  };

  return (
    <Paper style={{ margin: 20, padding: 15 }}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid xs={9} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              label="First Name"
              placeholder="John"
              name="firstName"
              onChange={handleChange}
              value={todo.firstName}
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="Last Name"
              placeholder="Doe"
              name="lastName"
              value={todo.lastName}
              onChange={handleChange}
              multiline
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="email"
              placeholder="timovie@gmail.com"
              name="email"
              value={todo.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="Phone Number"
              placeholder="+2348123456789"
              name="phone"
              value={todo.phone}
              onChange={handleChange}
              multiline
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="Age"
              placeholder="23"
              name="age"
              value={todo.age}
              onChange={handleChange}
              multiline
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="Address"
              placeholder="Akure, Ondo State."
              name="address"
              value={todo.address}
              onChange={handleChange}
              multiline
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="Purpose Of Stay"
              placeholder="Pleasure"
              name="reasonForStay"
              value={todo.reasonForStay}
              onChange={handleChange}
              multiline
              variant="outlined"
              fullWidth
            />
            <br />
            <br />
            <br />
            <TextField
              label="Duration"
              placeholder="1"
              name="duration"
              value={todo.duration}
              onChange={handleChange}
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={3} md={1} item>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              style={{ height: 100 }}
              onClick={handleSubmit}
            >
              Book Guest
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
