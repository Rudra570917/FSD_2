import { useState } from 'react';

export default function Todo() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const addTask = () => {
    // Check: if input is empty then
    if (task.trim() === '') return;
    
    setTodo([...todo, { id: Date.now(), name: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
      
      {/* If there is noo task added then condition*/}
      {todo.length === 0 ? (
        <p>No tasks added yet. Please add a task!</p>
      ) : (
        <ul>
          {todo.map((t) => (
            <li key={t.id}>
              {t.name}
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      
      
    </div>
  );
}