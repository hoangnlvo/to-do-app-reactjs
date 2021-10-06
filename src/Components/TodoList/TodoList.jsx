import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "../Task/Task";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import "./TodoList.css";

const TodoList = ({ history }) => {
  const [todoList, setTodoList] = useState(null);
  const [error, setError] = useState(null);

  const loadTaskList = async () => {
    await axios("http://localhost:8080/todolist/list")
      .then((res) => res.data)
      .then((res) => {
        const { todoList } = res;
        setError(null);
        setTodoList(todoList);
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  const handleDelete = async (taskID) => {
    await axios
      .post("http://localhost:8080/todolist/delete", { taskID: taskID })
      .then(() => {
        loadTaskList();
      })
      .catch((error) => {
        setError(error.toString());
      });
  };

  useEffect(() => {
    loadTaskList();
  }, []);

  return (
    <div className="taskList">
      {error ? (
        <div>{error}</div>
      ) : todoList ? (
        todoList.map(({ task_id, task_name, task_is_done }) => (
          <Task
            key={task_id}
            taskName={task_name}
            taskIsDone={task_is_done}
            taskID={task_id}
            onClick={() => handleDelete(task_id)}
          />
        ))
      ) : (
        <CircularProgress className="spinner" />
      )}

      {todoList && (
        <Button
          variant="contained"
          type="submit"
          onClick={() => history.push("/addtask")}
        >
          Add New Task
        </Button>
      )}
    </div>
  );
};

export default TodoList;
