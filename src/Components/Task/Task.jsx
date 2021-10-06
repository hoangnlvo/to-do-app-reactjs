import React from "react";
import axios from "axios";
import "./Task.css";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = ({ taskID, taskName, taskIsDone, onClick }) => {
  const handleChange = async (e) => {
    await axios
      .post("http://localhost:8080/todolist/update", {
        taskID: taskID,
        taskIsDone: e.target.checked,
      })
      .catch((err) => {
        console.log(err.toString());
      });
  };

  return (
    <div className="myTask">
      <div className="taskInfo">
        <Checkbox
          data-testid="taskCheckBox"
          className="taskCheckBox"
          type="checkbox"
          value={taskName}
          name={taskName}
          defaultChecked={taskIsDone}
          onChange={handleChange}
        />

        <p className="taskName" data-testid="taskName">
          {taskName}
        </p>
      </div>
      <Button variant="outlined" data-testid="deleteButton" onClick={onClick}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default Task;
