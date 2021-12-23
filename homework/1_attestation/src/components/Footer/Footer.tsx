import React from 'react';
import { Switch } from 'antd';
import './Footer.scss';
import { useDispatch } from 'react-redux';
import { IsDarkCreator } from '../../actions/IsDarkCreator';

export const Footer = () => {
  const dispatch = useDispatch();

  const onChange = (checked: boolean) => {
    dispatch(IsDarkCreator(checked));
    if (checked) {
      localStorage.setItem('isDark', 'true');
    } else localStorage.removeItem('isDark');
  };

  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__info">Nosebook © 2020-2021</div>
          <div className="footer__container__checkbox">
            Темная тема
            <Switch
              className="footer__container__checkbox__switch"
              defaultChecked={Boolean(localStorage.getItem('isDark'))}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
);
};
