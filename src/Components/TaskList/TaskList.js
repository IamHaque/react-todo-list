import React from "react";

import "./TaskList.css";

import ListItem from "../ListItem/ListItem";

const TaskList = ({ tasks, deleteTaskHandler, changeTaskStatusHandler }) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            deleteTaskHandler={deleteTaskHandler}
            changeTaskStatusHandler={changeTaskStatusHandler}
          />
        ))
      ) : (
        <div className="no-tasks">
          <p>No Active Tasks</p>
        </div>
      )}
    </ul>
  );
};

export default TaskList;
