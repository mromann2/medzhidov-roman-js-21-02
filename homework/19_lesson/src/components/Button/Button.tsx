import React, { useContext } from 'react';
import './Button.css';
import { ThemeContext } from '../../contexts/ThemeContext';

interface Props {
    number: number,
    handler: Function,
}

export function Button({ number, handler }: Props) {
    const themeContext = useContext(ThemeContext);
        return (
          <button
            type="button"
            className={themeContext.darkTheme ? 'button button_darkTheme' : 'button'}
            onClick={() => handler(number)}
          >
            {number}
          </button>
);
}

