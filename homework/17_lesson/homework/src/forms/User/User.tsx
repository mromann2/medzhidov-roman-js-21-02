import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserResponse } from '../../types/dumMyApiResponses';
import { getUserById } from '../../api/dumMyApi';
import './User.css';

export function User() {
    const [user, setUser] = useState({} as UserResponse);
    const params = useParams();

    useEffect(() => {
        getUserById(params.id, setUser);
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
            navigate(-1);
    };

    return (
      <>

        <div className="user">
          <button type="button" onClick={handleClick}>Назад</button>
          <img alt="user" src={user.picture} />
          <ul>
            <li>
              id:&nbsp;
              {user.id}
            </li>
            <li>
              title:&nbsp;
              {user.title}
            </li>
            <li>
              firstName:&nbsp;
              {user.firstName}
            </li>
            <li>
              lastName:&nbsp;
              {user.lastName}
            </li>
            <li>
              gender:&nbsp;
              {user.gender}
            </li>
            <li>
              email:&nbsp;
              {user.email}
            </li>
            <li>
              dateOfBirth:&nbsp;
              {user.dateOfBirth}
            </li>
            <li>
              registerDate:&nbsp;
              {user.registerDate}
            </li>
            <li>
              phone:&nbsp;
              {user.phone}
            </li>
          </ul>
        </div>
      </>
);
}
