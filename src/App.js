import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';

function App() {
  const todos = [
      {id: 1, completed: true, title: 'Fix door'},
      {id: 2, completed: false, title: 'Add silicon in bathroom'},
      {id: 3, completed: false, title: 'Change panels'},
  ];

  return (
    <div className="App">
      <h1>R</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
