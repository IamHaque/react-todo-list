import React, { useState, useEffect } from "react";

import id from "shortid";

import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [date, setDate] = useState("");

  useEffect(() => {
    const localStorageTasks = window.localStorage.getItem("react-tasks");
    if (localStorageTasks) {
      setTasks(JSON.parse(localStorageTasks));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("react-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (filter === "completed") {
      setFilteredTasks([...tasks].filter((task) => task.completed));
    } else if (filter === "incomplete") {
      setFilteredTasks([...tasks].filter((task) => !task.completed));
    } else {
      setFilteredTasks([...tasks]);
    }
  }, [tasks, filter]);

  useEffect(() => {
    const [weekday, date] = new Date()
      .toLocaleTimeString("en-us", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
      .split(",");
    setDate(`${weekday},${date}`);
  }, [date]);

  const taskChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setTask("");
    setTasks([
      ...tasks,
      {
        task,
        completed: false,
        id: id.generate(),
      },
    ]);
  };

  const deleteTaskHandler = (id) => {
    setTasks([...tasks].filter((task) => (task.id !== id ? task : null)));
  };

  const changeTaskStatusHandler = (id) => {
    setTasks(
      [...tasks].map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterAll = () => {
    setFilter("all");
    setFilteredTasks([...tasks]);
  };

  const filterCompleted = () => {
    setFilter("completed");
    setFilteredTasks([...tasks].filter((task) => task.completed));
  };

  const filterIncomplete = () => {
    setFilter("incomplete");
    setFilteredTasks([...tasks].filter((task) => !task.completed));
  };

  return (
    <div className="App">
      <Nav
        date={date}
        filter={filter}
        tasks={filteredTasks}
        filterAll={filterAll}
        filterCompleted={filterCompleted}
        filterIncomplete={filterIncomplete}
      />

      <Search
        task={task}
        taskChangeHandler={taskChangeHandler}
        formSubmitHandler={formSubmitHandler}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTaskHandler={deleteTaskHandler}
        changeTaskStatusHandler={changeTaskStatusHandler}
      />
    </div>
  );
}

export default App;
