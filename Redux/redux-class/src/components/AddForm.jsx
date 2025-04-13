import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        if (!task.trim()) return; // prevent empty strings
        dispatch(addTodo(task.trim()));
        setTask("");
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}
