import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const markHandler = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <>
            <h1>Todo List App</h1>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.isDone ? "line-through" : "none",
                            color: todo.isDone ? "gray" : "white"
                        }}
                    >
                        {todo.task}
                        <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                        <button onClick={() => markHandler(todo.id)}>
                            {todo.isDone ? "Undo" : "Mark as Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
