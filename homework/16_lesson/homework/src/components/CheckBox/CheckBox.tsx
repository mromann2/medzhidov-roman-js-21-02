import React, { useContext } from 'react';
import './CheckBox.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export function CheckBox() {
    const themeContext = useContext(ThemeContext);
    return (
      <div className="checkbox">
        Тёмная тема
        <input
          className="checkbox__input"
          checked={themeContext.darkTheme}
          type="checkbox"
          onChange={themeContext.toggleTheme}
        />
      </div>
);
}
