import React from 'react';
import './Button.css';

interface Props {
    number: number,
    handler: Function,
}

export class Button extends React.Component<Props, any> {
    render() {
        return (
          <button type="button" className="button" onClick={() => this.props.handler(this.props.number)}>{this.props.number}</button>
);
    }
}
