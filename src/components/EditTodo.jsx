import React, { useState } from "react";
import axios from "axios";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const EditTodo = props => {
  const [todo, setTodo] = useState(props.currentTodo);

  const handleChange = e => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleUpdate = e => {
    e.preventDefault();
    props.setEdit(false);
    axios
      .put(`https://mighty-mesa-03143.herokuapp.com/update-reservation/${props.currentTodoId}`, {
        firstName: todo.firstName,
        lastName: todo.lastName,
        email: todo.email,
        phone: todo.phone,
        age: todo.age,
        address: todo.address,
        reasonForStay: todo.reasonForStay,
        duration: todo.duration
      })
      .then(res => setTodo(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Paper style={{ margin: 20, padding: 15 }}>
        <form onSubmit={handleUpdate}>
          <label>Edit</label>
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
            <Grid xs={2} md={1} item>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                style={{ height: 50 }}
                onClick={handleUpdate}
              >
                Update
              </Button>
            </Grid>
            <Grid xs={2} md={1} item>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                style={{ height: 50 }}
                onClick={() => {
                  props.setEdit(false);
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default EditTodo;
