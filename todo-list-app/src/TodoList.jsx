import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample Task"]);
  let [newTodo, setNewTodo] = useState([""]);

  let addTask = () => {
    // console.log("We have added a task.");
    setTodos([...todos, newTodo]);
    setNewTodo("");
    // console.log(todos);
  };

  let updateTodo = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  return (
    <div>
        <h1>Todo List App</h1>
      <input placeholder="Add a task.." value={newTodo} onChange={updateTodo} />
      <br />
      <br />
      <button onClick={addTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo Task</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
