import React, { useState } from "react";
import {
  Paper,
  Typography,
  List,
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import { DeleteOutlined, DeleteSweep, Edit } from "@material-ui/icons";

export const TodoItems = props => {
  return (
    <Paper style={{ margin: 20, padding: 20 }}>
      <Grid container>
        <Grid xs={2} md={1} item>
          <Checkbox
            onClick={props.onCheckBoxToggle}
            checked={props.checked}
            disableRipple
          ></Checkbox>
        </Grid>
        <Grid xs={8} md={10} item>
          <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
            {(props.todo.firstName, props.todo.lastName)}
          </Typography>
          <Typography style={{ color: "blue" }}>
            {props.todo.address}
          </Typography>
        </Grid>
        <Grid xs={2} md={1} item>
          <IconButton
            onClick={() => {
              props.handleDeleteOne(props.todo._id);
            }}
          >
            <DeleteOutlined />
          </IconButton>
          <IconButton
            onClick={() => {
              props.handleEdit(props.index);
            }}
          >
            <Edit />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const RemoveAll = props => {
  if (props.todo.length > 1) {
    return (
      <Button
        variant="contained"
        color="primary"
        style={{ height: 50, marginLeft: "70vw" }}
        onClick={() => {
          props.handleRemoveAll();
        }}
      >
        <DeleteSweep />
        Delete All
      </Button>
    );
  } else {
    return null;
  }
};
