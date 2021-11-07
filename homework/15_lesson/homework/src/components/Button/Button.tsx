import React from 'react';
import './Button.css';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

interface Props {
    number: number,
    handler: Function,
}

export class Button extends React.Component<Props, any> {
    render() {
        return (
          <ThemeContextConsumer>
            {(context: Partial<ThemeContextState>) => (
              <button
                type="button"
                className={context.darkTheme ? 'button button_darkTheme' : 'button'}
                onClick={() => this.props.handler(this.props.number)}
              >
                {this.props.number}
              </button>
)}
          </ThemeContextConsumer>
                );
    }
}
