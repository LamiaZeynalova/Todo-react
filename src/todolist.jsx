import React, { useState } from 'react';
import './todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSaveTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editValue;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <h1 className="title">Todo List</h1>
      <form onSubmit={handleAddTodo} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="input"
        />
        <button type="submit" className="addButton">Add Task</button>
      </form>
      <ul className="todoList">
        {todos.map((todo, index) => (
          <li key={index} className="todoItem">
            {editIndex === index ? (
              <div className="editContainer">
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  className="input"
                />
                <button onClick={() => handleSaveTodo(index)} className="saveButton">Save</button>
              </div>
            ) : (
              <div className="todoContent">
                <span>{todo}</span>
                <div className='todobutton'>
                <button onClick={() => handleEditTodo(index)} className="editButton">Edit</button>
                <button onClick={() => handleDeleteTodo(index)} className="deleteButton">Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
