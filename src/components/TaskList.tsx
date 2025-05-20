import React from 'react';
import TodoItem, { Todo } from './TodoItem';
import '../styles/components/TaskList.css';

interface TaskListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <div className="emptyList">No tasks yet. Add one!</div>;
  }
  
  return (
    <ul className="taskList">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
