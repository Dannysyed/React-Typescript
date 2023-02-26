import React from 'react';
import './App.css';
import Newtodo from './components/Newtodo';
import Todo from './components/todo';
import TodoList from './models/todo';
function App() {
  const Todos = [new TodoList('Learn React'), new TodoList('Learn Typescript')]
  console.log(Todos)
  let formdata = (data: string) => {
    console.log(data)
  }
  return (
    <div >
      <Newtodo OnAddData={formdata} />
      <Todo items={Todos} />
    </div>
  );
}

export default App;
