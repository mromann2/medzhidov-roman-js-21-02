import React from 'react';
import './Goal.css';

interface Props{
    text: string;
    id: number;
    onDel?: any;
}

export class Goal extends React.Component<Props> {
    render() {
        return (
          <article className="goal">
            <p>{this.props.text}</p>
            <button className="button" type="button" onClick={() => this.props.onDel(this.props.id)}>X</button>
          </article>
);
    }
}
