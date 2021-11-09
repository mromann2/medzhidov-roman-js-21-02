import React, { useEffect } from 'react';
import './FormUserCards.css';
import { UserCard } from '../../components/UserCard/UserCard';
import { UserType } from '../../types/dumMyApiResponses';
import ComponentWithHelper from '../../wrappers/withHelper';
import { getUserList } from '../../api/dumMyApi';
import { Button } from '../../components/Button/Button';
import { CheckBox } from '../../components/CheckBox/CheckBox';

export function FormUserCards() {
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(0);

    const loadUsers = (pageNum: number, limit: number) => {
        // @ts-ignore
        getUserList(pageNum, limit, (response: Array<UserType>) => setUsers(response));
    };

    useEffect((): void => {
        loadUsers(page, 10);
    }, [page]);

    const handlerClick = (num: number): void => {
        setPage(num - 1);
    };



    const addButtons = () => {
        if (users.length) {
            return (
              <>
                <Button number={1} handler={handlerClick} />
                <Button number={2} handler={handlerClick} />
                <Button number={3} handler={handlerClick} />
                <Button number={4} handler={handlerClick} />
                <Button number={5} handler={handlerClick} />
              </>
);
        } return null;
    };

        return (
          <>
            <section className="form-user-cards">
              {users.length !== 0
                      ? users.map((user: UserType, index: number) => (
                        <ComponentWithHelper comment={user.id || 'Здесь должен быть ID'}>
                          <UserCard
                            key={index}
                            id={user.id}
                            title={user.title}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            picture={user.picture}
                          />
                        </ComponentWithHelper>
                      ))
                      : 'No users'}
              <div>{addButtons()}</div>
              <CheckBox />
            </section>
          </>
);
    }

