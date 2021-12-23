import React, { useEffect, useState } from 'react';
import './UserFullForm.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FormOutlined } from '@ant-design/icons';
import { getUserFull } from '../../actions/UserFullAction';
import { ModalUserRedact } from '../ModalUserRedact/ModalUserRedact';
import { State } from '../../types/state';
import { ModalUserRedact2 } from '../ModalUserRedact/ModalUserRedact2';


export const UserFullForm = () => {
    const params = useParams<string>();
    const dispatch = useDispatch();
    const fullUser = useSelector((state: State) => state.userFull.userFull);
    const [modalActive, setModalActive] = useState(false);


    useEffect(() => {
        params.id && dispatch(getUserFull(params.id));
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };

    return (
      <div className="user-profile">
        {fullUser.id ? (
          <div className="user-profile__form form">
            <div className="form__body">
              <div className="form__user">
                <div className="form__picture">
                  <img src={`${fullUser.picture}`} alt="User-face" />
                </div>
                <div className="form__user-data">
                  <div className="form__user-data__data">
                    <h2>{`${fullUser.title}. ${fullUser.firstName} ${fullUser.lastName}`}</h2>
                    <span>
                      <b>Пол</b>
                      {` - ${fullUser.gender}`}
                    </span>
                    <span>
                      <b>Дата рождения</b>
                      {` - ${fullUser.dateOfBirth}`}
                    </span>
                    <span>
                      <b>Дата регистрации</b>
                      {` - ${fullUser.registerDate}`}
                    </span>
                    <span>
                      <b>E-mail</b>
                      {` - ${fullUser.email}`}
                    </span>
                    <span>
                      <b>Номер телефона</b>
                      {` - ${fullUser.phone}`}
                    </span>
                  </div>
                  <div className="form__user-data__id">
                    <b>ID</b>
                    {` - ${fullUser.id}`}
                  </div>
                </div>
              </div>
              {params.id === localStorage.getItem('ID') && (
              <div>
                <Link to="" onClick={() => setModalActive(true)}>
                  <FormOutlined className="form__user-data__redact-icon" />
                  Редактировать
                </Link>
                <ModalUserRedact2 active={modalActive} setActive={setModalActive} />
              </div>

)}
            </div>
          </div>
                ) : (
                  <div className="posts-form__loading">
                    <Spin />
                  </div>
                )}
        <div className="user-profile__buttons">
          <div
            className="user-profile__button-back"
            onClick={handleClick}
            role="presentation"
          >
            Вернуться назад
          </div>
        </div>
      </div>
    );
};
