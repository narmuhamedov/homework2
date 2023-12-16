import React, { useState, useEffect } from 'react';
import List from './components/List';
import Button from './components/Button';

const App = () => {
  const initialTasks = [
    { id: 1, task: 'coding' },
    { id: 2, task: 'eat' },
    { id: 3, task: 'sleep' },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [addInput, setAddInput] = useState('');
  const [search, setSearch] = useState('');

  const handleAddInputChange = (e) => {
    setAddInput(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const addTask = () => {
    if (addInput.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        task: addInput.trim(),
      };

      setTasks([...tasks, newTask]);
      setAddInput('');
    }
  };

  useEffect(() => {
    const filteredTasks = tasks.filter((task) =>
      task.task.toLowerCase().includes(search.toLowerCase())
    );
    setTasks(filteredTasks);
  }, [search]);

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search tasks"
      />
      <input
        type="text"
        value={addInput}
        onChange={handleAddInputChange}
        placeholder="Add task"
      />
      <List tasks={tasks} />
      <Button text="Add Task" onClick={addTask} />
    </div>
  );
};

export default App;
