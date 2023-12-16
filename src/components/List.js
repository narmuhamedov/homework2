import React from 'react';

const List = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
