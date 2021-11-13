import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { UsersList } from './forms/UsersList/UsersList';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { User } from './forms/User/User';


function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <main className="main">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersList />} />
              <Route path="/userform/:id" element={<User />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
