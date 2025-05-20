import React, { useState } from 'react';
import './AddTask.css';

interface AddTaskProps {
  onAdd: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim() === '') return;
    
    onAdd(text);
    setText('');
  };

  return (
    <form className="addTaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="taskInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="addButton">Add Task</button>
    </form>
  );
};

export default AddTask;
