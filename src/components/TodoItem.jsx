// TodoItem.js
import React, { useState } from "react";

const TodoItem = ({ item, index, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editInput, setEditInput] = useState(item);

    const handleEditChange = (e) => {
        setEditInput(e.target.value);
    };

    const handleUpdate = () => {
        updateTodo(editInput, index);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={editInput} 
                        onChange={handleEditChange} 
                    />
                    <button onClick={handleUpdate}>Update</button>
                </>
            ) : (
                <>
                    <span>{item}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;