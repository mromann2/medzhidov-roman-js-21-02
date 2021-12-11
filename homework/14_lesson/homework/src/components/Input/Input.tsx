import React from 'react';
import './Input.css';

interface Props{
    text: string;
    onCreate?: any;
}

export class Input extends React.Component<any, any> {
    constructor(props: Props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
          <form onSubmit={(event) => {
              event.preventDefault();
              this.props.onCreate(this.state.value);
              this.setState({ value: '' });
          }}
          >
            <input
              className="input"
              type="text"
              value={this.state.value}
              onChange={(event) => {
                  this.setState({ value: event.target.value });
              }}
            />
            <button type="submit">Добавить</button>
          </form>
);
    }
}
