import React from 'react';
import './Goal.css';

interface Props{
    text: string
}

export class Goal extends React.Component<Props> {
    render() {
        return <article className="goal">{this.props.text}</article>;
    }
}
