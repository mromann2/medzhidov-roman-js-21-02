import React from 'react';
import './App.css';
import { FormUserCards } from './forms/FormUserCards/FormUserCards';

function App() {
  return (
    <div className="App">
      <main className="main">
        <h1>Пользователи</h1>
        <FormUserCards />
      </main>
    </div>
  );
}

export default App;
