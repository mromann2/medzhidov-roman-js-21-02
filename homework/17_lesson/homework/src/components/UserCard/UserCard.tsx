import React, { useContext } from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

interface Props{
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
}

export function UserCard({
 id, title, firstName, lastName, picture,
}: Props) {
    const themeContext = useContext(ThemeContext);
       return (
         <Link to={`/userform/${id}`}>
           <article className={themeContext.darkTheme ? 'user-card user-card_darkTheme' : 'user-card'}>
             <img src={picture} alt={`user id ${id}`} className="user-card__icon" />
             <p className="user-card__name">{`${title} ${firstName} ${lastName}`}</p>
           </article>
         </Link>
);
}


UserCard.defaultProps = {
    id: '#',
    title: '',
    firstName: '',
    lastName: '',
    picture: '',
};
