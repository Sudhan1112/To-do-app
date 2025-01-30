// TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter the task"
                value={input}
                onChange={handleInputChange}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default TodoForm;