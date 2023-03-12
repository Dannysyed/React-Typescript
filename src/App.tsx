import React, { useState } from 'react';
import './App.css';
import Newtodo from './components/Newtodo';
import Todo from './components/todo';
import TodoList from './models/todo';
import ContextProvider from './store/ContextProvider';
function App() {
  // const Todos = [new TodoList('Learn React'), new TodoList('Learn Typescript')]
  const [todos, setTodos] = useState<TodoList[]>([])
  // console.log(Todos)
  let formdata = (data: string) => {
    console.log(data)
    const newTodo = new TodoList(data)
    console.log(newTodo)
    setTodos(prev => prev.concat(newTodo))

  }
  let onDelete = (id: number) => {
    let filterItem = todos.filter(val => val.id !== id)
    setTodos(filterItem)
    console.log(id, '..........', filterItem)
  }
  return (
    <ContextProvider>

      <Newtodo OnAddData={formdata} />
      <Todo items={todos} delete={onDelete} />
    </ContextProvider>
  );
}

export default App;
