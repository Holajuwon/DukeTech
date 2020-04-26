import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

const Login = props => {
  const { classes } = props;
  const history = useHistory();

  const [todo, setTodo] = useState({ username: "", password: "" });
  const handleChange = e => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
    console.log(todo);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { username, password } = todo;
    axios
      .post("https://duketech-api.herokuapp.com/login", {
        username,
        password
      })
      .then(res => {
        console.log(res);
        return history.push("/book");
      })
      .catch(err => console.log(err));
  };
  return (
    <Paper className={classes.padding}>
      <form onSubmit={handleSubmit}>
        <div className={classes.margin}>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Typography style={{ fontSize: 50 }}> Login </Typography>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="text"
                fullWidth
                autoFocus
                required
                name="username"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Password"
                type="password"
                fullWidth
                required
                name="password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
              disabled={!(todo.username.length >= 5)}
            >
              Login
            </Button>
          </Grid>
        </div>
      </form>
    </Paper>
  );
};
export default withStyles(styles)(Login);
