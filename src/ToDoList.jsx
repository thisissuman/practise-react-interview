import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const getLocalitems = () => {
    const list = localStorage.getItem("list");
    console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("list"))
    }
  };
  const [inputvalue, setInputvalue] = useState("");
  const [submitvalue, setSubmitvalue] = useState(getLocalitems());

  const submitHandeler = (e) => {
    setSubmitvalue([...submitvalue, inputvalue]);
    setInputvalue("");
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(submitvalue));
  }, [submitvalue]);

  const deleteHanlder = (index) => {
    setSubmitvalue(submitvalue.filter((_, i) => i != index));
  };

  const textStyle = {
    textDecoration: "line-through",
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">My TODO List App</h1>
        <form onSubmit={submitHandeler}>
          <input
            type="text"
            className="todo-input"
            onChange={(e) => setInputvalue(e.target.value)}
            value={inputvalue}
            placeholder="type the task here"
          />
          <label htmlFor="app">app</label>
          <button type="submit" className="todo-button">
            +Add Task
          </button>
        </form>
        <ul className="todo-list">
          {submitvalue.map((task, index) => (
            <li key={index} className="todo-item">
              <input type="checkbox" />
              {task}
              <button onClick={() => deleteHanlder(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
