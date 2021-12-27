import React, { useEffect, useState } from 'react';
import './Header.scss';
import { PictureOutlined, TeamOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import { State } from '../../types/state';
import { isLoggedCreator } from '../../actions/IsLoggedCreator';
import { ClearUserFullCreator } from '../../actions/UserFullAction';

export const Header = () => {
  const isLogged = useSelector((state: State) => state.isLogged.isLogged);
  const loggedUser = useSelector((state: State) => state.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch(isLoggedCreator(false));
    dispatch(ClearUserFullCreator());
    localStorage.removeItem('isLogged');
    localStorage.removeItem('ID');
    localStorage.removeItem('firstName');
    localStorage.removeItem('picture');
  };

  useEffect(() => {
    !isLogged && navigate('/login');
  }, [isLogged]);

// @ts-ignore
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo__icon" />
          <div className="header__logo__title">Nosebook</div>
        </div>
        <div className="header__menu">
          <TeamOutlined className="header__menu__user-icon" />
          <Link className="header__menu__title" to="/users">
            Пользователи
          </Link>
          <PictureOutlined className="header__menu__posts-icon" />
          <Link className="header__menu__title" to="/posts">
            Посты
          </Link>
        </div>
        {isLogged ? (
          <div className="header__authorization">
            <Link className="header__authorization__logged" to={`/user/${localStorage.getItem('ID') || loggedUser.id}`}>
              {localStorage.getItem('picture') && <img src={localStorage.getItem('picture') || undefined} alt="avatar" className="header__logo__icon" />}
              {localStorage.getItem('firstName') || loggedUser.firstName}
            </Link>
            <Link
              className="header__authorization__logout"
              onClick={handleLogoutClick}
              role="presentation"
              to="/login"
            >
              Выйти
            </Link>
          </div>
      ) : (
        <div className="header__authorization">
          <Link className="header__authorization__log-in" to="/login">Вход</Link>
          <Link className="header__authorization__registration" to="/registration">Регистрация</Link>
        </div>
      )}
      </div>
    </div>
);
};
