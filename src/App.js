import React, { useEffect } from 'react';
import './App.css';
import { observable } from 'mobx';
import TodoList from './todos/TodoList';
import Context from './context';
import LanguageContext from './LanguageContext';
import Counter from "./counter/Counter";
import AppCounter from './app-counter/AppCounter';
import Loader from './Loader';

const appState = observable({
    count: 0,
    plus: () => { appState.count++ },
    minus: () => { appState.count-- },
    reset: () => { appState.count = 0 }
});

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loader, setLoader] = React.useState(true);

    const AddTodo = React.lazy(() => import('./todos/AddTodo'));

   useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
           .then(response => response.json())
           .then(todos =>
               setTimeout(() => {
                   setTodos(todos);
                   setLoader(false);
               }, 3000)
           );
   });

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

                <React.Suspense fallback={ <p>Loading...</p> }>
                    <AddTodo onCreate={ addTodo } />
                </React.Suspense>

                { loader && <Loader /> }

                { todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : (
                    loader ? null : <p>No todos!</p>
                )}
            </div>




            <AppCounter appState={appState} />
            <Counter />
        </LanguageContext.Provider>
    </Context.Provider >
  );
}

export default App;
