import React from "react";

const ListItem = ({ task, deleteTaskHandler, changeTaskStatusHandler }) => {
  return (
    <li>
      <div className="left">
        <button
          className="task-button task-check"
          onClick={() => changeTaskStatusHandler(task.id)}
        >
          {task.completed ? (
            <i className="far fa-times-circle"></i>
          ) : (
            <i className="far fa-check-circle"></i>
          )}
        </button>
        <p className={task.completed ? "checked" : ""}>{task.task}</p>
      </div>
      <div className="right">
        <button
          className="task-button task-delete"
          onClick={() => deleteTaskHandler(task.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
