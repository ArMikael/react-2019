import React from 'react';
import './App.css';
import { observable } from 'mobx';
import TodoList from './todos/TodoList';
import Context from './context';
import LanguageContext from './LanguageContext';
import Counter from "./counter/Counter";
import AppCounter from './app-counter/AppCounter';
import AddTodo from './todos/AddTodo';

const appState = observable({
    count: 0,
    plus: () => { appState.count++ },
    minus: () => { appState.count-- },
    reset: () => { appState.count = 0 }
});

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

  function addTodo(title) {
    setTodos(todos.concat({
        id: todos.length + 1,
        completed: false,
        title: title
    }));
  }

  function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  const language = 'en';

  return (
    <Context.Provider value={{ removeTodo }}>
        <LanguageContext.Provider value={language}>
            <div className="App">
                <h1>R</h1>
                <AddTodo onCreate={ addTodo } />

                { todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : (
                    <p>No todos!</p>
                )}
            </div>

            <AppCounter appState={appState} />
            <Counter />
        </LanguageContext.Provider>
    </Context.Provider >
  );
}

export default App;
