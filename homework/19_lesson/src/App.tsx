import React from 'react';
import './App.css';
import {
 Route, Routes, BrowserRouter,
} from 'react-router-dom';
import { UsersList } from './forms/UsersList/UsersList';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { User } from './forms/User/User';
import { AppMenu } from './components/AppMenu/AppMenu';
import { AddUser } from './forms/AddUser/AddUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppMenu />
        <ThemeContextProvider>
          <div className="App">
            <main className="main">
              <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/userform/:id" element={<User />} />
                <Route path="/adduser" element={<AddUser />} />
              </Routes>
            </main>
          </div>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
);
}

export default App;
