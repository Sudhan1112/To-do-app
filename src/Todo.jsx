// Todo.js
import React, { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const updateTodo = (newItem, index) => {
        const updatedList = [...todoList];
        updatedList[index] = newItem;
        setTodoList(updatedList);
    };

    const deleteTodo = (index) => {
        const data = [...todoList];
        data.splice(index, 1);
        setTodoList(data);
    };

    return (
        <div>
            <h1>My Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todoList={todoList} 
                updateTodo={updateTodo} 
                deleteTodo={deleteTodo} 
            />
        </div>
    );
};

export default Todo;