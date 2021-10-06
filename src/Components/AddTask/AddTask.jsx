import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./AddTask.css";

const AddTask = ({ history }) => {
  const [name, setName] = useState();
  const [error, setError] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/todolist/create", { name })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  return (
    <form
      id="frmCreateTask"
      method="POST"
      onSubmit={handleSubmit}
      className="myFrm"
    >
      <TextField
        id="outlined-basic"
        label="Task Name"
        onChange={handleChangeName}
        variant="outlined"
        className="nameField"
        required
        data-testid="inputField"
      />
      <Box mt={1}>
        <Button
          data-testid="submitButton"
          variant="contained"
          type="submit"
          className="addTaskButton"
          mt={1}
        >
          Add
        </Button>
      </Box>
      {error && <div>{error}</div>}
    </form>
  );
};

export default AddTask;
