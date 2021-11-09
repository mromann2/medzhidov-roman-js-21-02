import React from 'react';
import './App.css';
import { FormUserCards } from './forms/FormUserCards/FormUserCards';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <main className="main">
          <h1>Пользователи</h1>
          <FormUserCards />
        </main>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
