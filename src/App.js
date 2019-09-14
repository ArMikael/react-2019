import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';
import Context from './context';

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: true, title: 'Fix door'},
        {id: 2, completed: false, title: 'Add silicon in bathroom'},
        {id: 3, completed: false, title: 'Change panels'},
    ]);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    }));
  }

  function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
        <div className="App">
            <h1>R</h1>
            <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
    </Context.Provider>
  );
}

export default App;
