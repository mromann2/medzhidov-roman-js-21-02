import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';

interface Props {
    // id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture: string,
}

export const UserCard = (props: Props) => {
    const isDark = useSelector((state: State) => state.isDark.isDark);

  return (
    <div className={isDark ? 'user__card user__card_dark' : 'user__card'}>
      <div className="user__card__picture">
        <img src={props.picture} alt="User-avatar" />
      </div>
      <div className="user__card__name">
        {`${props.title}. ${props.firstName} ${props.lastName}`}
      </div>
    </div>
);
};
