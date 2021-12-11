import React from 'react';
import './ModalUserRedact2.scss';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';

interface Props {
    active: boolean,
    setActive(active: boolean): void,
}

export const ModalUserRedact = ({ active, setActive }: Props) => {
    const fullUser = useSelector((state: State) => state.userFull.userFull);

    return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className="form__user modal__content" onClick={(e) => e.stopPropagation()}>
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
      </div>
    );
};
