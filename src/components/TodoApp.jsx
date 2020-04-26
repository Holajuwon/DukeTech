import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import axios from "axios";
import "@csstools/normalize.css/normalize.css";
import { TodoItems, RemoveAll } from "./TodoItems";
import EditTodo from "./EditTodo";
import Layout from "./layout";

const Todo = () => {
  const todoState = [];

  const [todo, setTodo] = useState(todoState);
  const [edit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState();

  const handleEdit = id => {
    setEdit(true);
    setCurrentTodo(todo[id]);
    setCurrentTodoId(todo[id]._id);
  };

  const handleGetTodo = () => {
    axios
      .get("https://duketech-api.herokuapp.com/reservations")
      .then(res => setTodo(res.data))
      .catch(err => console.log(err));
  };

  const handleDeleteOne = id => {
    axios
      .delete(`https://duketech-api.herokuapp.com/deleteOne/${id}`)
      .then(res => console.log(res.data, "deleted"))
      .catch(err => console.log(err));
    console.log(id);
  };

  const handleRemoveAll = () => {
    axios
      .delete(`https://duketech-api.herokuapp.com/deleteAll`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    handleGetTodo();
  }, [todo]);

  return (
    <Fragment>
      {edit ? (
        <EditTodo
          currentTodo={currentTodo}
          handleEdit={handleEdit}
          currentTodoId={currentTodoId}
          setEdit={setEdit}
        />
      ) : (
        <Form />
      )}

      <RemoveAll todo={todo} handleRemoveAll={handleRemoveAll} />
      {todo.map((item, index) => (
        <TodoItems
          key={index}
          todo={item}
          handleDeleteOne={handleDeleteOne}
          handleEdit={handleEdit}
          index={index}
        />
      ))}
    </Fragment>
  );
};

export default Todo;
