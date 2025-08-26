import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo list </p>
        <br/>repository found at : <a href="https://github.com/DenniseCamacho/5.2GP">https://github.com/DenniseCamacho/5.2GP</a>
        <br/>
        <TodoList />
      </header>
    </div>
  );
}
export default App;
