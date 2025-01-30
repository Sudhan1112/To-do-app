// TodoList.js
import React from "react";
import TodoItem from './TodoItem'; // Importing TodoItem component

const TodoList = ({ todoList, updateTodo, deleteTodo }) => {
    return (
        <div>
            {todoList.length === 0 ? (
                <h3>There is no task to be done</h3>
            ) : (
                todoList.map((item, index) => (
                    <TodoItem 
                        key={index} 
                        item={item} 
                        index={index} 
                        updateTodo={updateTodo} 
                        deleteTodo={deleteTodo} 
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;