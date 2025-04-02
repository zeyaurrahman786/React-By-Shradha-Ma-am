import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  // let [todos, setTodos] = useState(["Sample Task"]);
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    // console.log("We have added a task.");
    // setTodos([...todos, newTodo]);
    // setTodos([...todos, {task: newTodo, id: uuidv4()}]);
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
    // console.log(todos);
  };

  let updateTodo = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };


  let deleteTodo = (id) => {
    // console.log("Delete Todo");
    // console.log(id);

    //  let copy = todos.filter((todo) => todo.id != id);
    //  console.log(copy);

    // setTodos(todos.filter((todo) => todo.id != id));

    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  }


  // let upperCaseAll = () => {
  //   setTodos((prevTodos) => (
  //     prevTodos.map((todo) => {
  //       return {
  //         ...todo,
  //         task: todo.task.toUpperCase(),
  //       };
  //     })
  //   ));
  // };


  // let upperCaseOne = (id) => {
  //   setTodos((prevTodos) => (
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   ));
  // };


  let markAsDone = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    ));
  };


  let markAllDone = () => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    ));
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
          // <li>{todo}</li>
          // <li key={todo.id}>{todo.task}</li>
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button> */}
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllDone}>Mark All As Done</button>
    </div>
  );
}
