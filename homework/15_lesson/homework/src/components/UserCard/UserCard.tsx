import React from 'react';
import './UserCard.css';

interface Props{
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
}

export class UserCard extends React.Component<Props, any> {
    render() {
       return (
         <article className="user-card">
           <img src={this.props.picture} alt={`user id ${this.props.id}`} className="user-card__icon" />
           <p className="user-card__name">{`${this.props.title} ${this.props.firstName} ${this.props.lastName}`}</p>
         </article>
);
    }
}
