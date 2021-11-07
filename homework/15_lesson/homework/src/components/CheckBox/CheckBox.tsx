import React from 'react';
import './CheckBox.css';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

export class CheckBox extends React.Component<any, any> {
    render() {
        return (
          <ThemeContextConsumer>
            {
                    (context: Partial<ThemeContextState>) => (
                      <div className="checkbox">
                        Тёмная тема
                        <input
                          className="checkbox__input"
                          checked={context.darkTheme}
                          type="checkbox"
                          onChange={context.toggleTheme}
                        />
                      </div>
)
}
          </ThemeContextConsumer>
);
    }
}
