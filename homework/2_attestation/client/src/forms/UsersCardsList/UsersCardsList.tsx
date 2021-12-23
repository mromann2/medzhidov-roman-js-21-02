import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from '../../components/UserСard/UserCard';
import { UserPreviewData } from '../../types/API';
import { loadCardsList } from '../../actions/UsersCardsListAction';
import { State } from '../../types/state';
import './UsersCardsList.scss';
import ComponentWithHelper from '../../wrappers/withHelper';



export const UsersCardsList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: State) => state.users.usersCards);
    const total = useSelector((state: State) => state.users.total);
    const state1 = useSelector((state: State) => state);

    const onChange = (number: number) => {
        dispatch(loadCardsList(number - 1, 6));
    };

    useEffect(() => {
        console.log(state1);
      dispatch(loadCardsList(0, 6));
    }, []);

    return (
      <>
        <div className="user-form">
          {users.length ? (
            <div className="user-list user">
              {users?.map((elem: UserPreviewData, i) => (
                <ComponentWithHelper comment={elem.id} key={i}>
                  <Link className="user__link" to={`/user/${elem.id}`} key={i}>
                    <UserCard
                      picture={elem.picture}
                      title={elem.title}
                      firstName={elem.firstName}
                      lastName={elem.lastName}
                    />
                  </Link>
                </ComponentWithHelper>
          ))}
            </div>
)
            : (
              <div className="user-form__loading">
                <Spin />
              </div>
)}
        </div>
        <Pagination className="paginator" size="small" defaultCurrent={1} total={total} pageSize={6} showSizeChanger={false} onChange={onChange} />
      </>
    );
};
