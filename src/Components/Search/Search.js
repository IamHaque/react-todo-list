import React from "react";

import "./Search.css";

const Search = ({ task, taskChangeHandler, formSubmitHandler }) => {
  return (
    <form className="search" onSubmit={formSubmitHandler}>
      <input
        className="input"
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={taskChangeHandler}
      />
      <button className="button primary" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Search;
