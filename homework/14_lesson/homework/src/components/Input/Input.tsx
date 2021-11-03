import React from 'react';

interface Props{
    text: string;
}

export class Input extends React.Component<Props> {
    render() {
        return <input className="input" type="text" defaultValue={this.props.text} />;
    }
}
