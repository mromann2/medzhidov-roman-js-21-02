import React from 'react';
import './Sidebar.css';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>Главная</li>
          <li>Коммменты</li>
          <li>Профиль</li>
        </ul>
      </div>
    );
  }
}