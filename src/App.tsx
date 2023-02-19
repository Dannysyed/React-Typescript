import React from 'react';
import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div >
      <Todo items={['jee', 'asdf']} />
    </div>
  );
}

export default App;
