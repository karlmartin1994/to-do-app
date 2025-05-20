import React from 'react';
import '../styles/components/TodoItem.css';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todoItem ${todo.completed ? 'todoItemCompleted' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todoCheckbox"
      />
      <span className="todoText">{todo.text}</span>
      <button 
        className="deleteButton"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
