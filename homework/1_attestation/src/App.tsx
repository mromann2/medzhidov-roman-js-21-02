import React from 'react';
import {
 Route, Navigate, Routes, HashRouter,
} from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { UsersCardsList } from './forms/UsersCardsList/UsersCardsList';
import { PostsList } from './forms/PostsList/PostsList';
import { Login } from './forms/Login/Login';
import { Registration } from './forms/Registration/Registration';
import { UserFullForm } from './forms/UserFullForm/UserFullForm';

const App = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/users" element={<UsersCardsList />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/user/:id" element={<UserFullForm />} />

        </Routes>
      </div>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
