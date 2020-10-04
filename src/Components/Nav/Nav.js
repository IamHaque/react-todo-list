import React from "react";

import "./Nav.css";

const Nav = ({
  date,
  tasks,
  filter,
  filterAll,
  filterCompleted,
  filterIncomplete,
}) => {
  return (
    <div className="nav">
      <div className="date">
        <p>{date}</p>
        <p className="active-tasks">
          {tasks.length > 0 ? tasks.length : "No"} Active Tasks
        </p>
      </div>
      <div className="filter">
        <p
          onClick={filterAll}
          className={`filter-item ${filter === "all" ? "active" : ""}`}
        >
          All Tasks
        </p>
        <p
          onClick={filterIncomplete}
          className={`filter-item ${filter === "incomplete" ? "active" : ""}`}
        >
          Incomplete Tasks
        </p>
        <p
          onClick={filterCompleted}
          className={`filter-item ${filter === "completed" ? "active" : ""}`}
        >
          Completed Tasks
        </p>
      </div>
    </div>
  );
};

export default Nav;
