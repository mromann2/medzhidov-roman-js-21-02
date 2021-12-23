import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFull } from '../../actions/UserFullAction';
import { State } from '../../types/state';
import { isLoggedCreator } from '../../actions/IsLoggedCreator';

export const Login = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fullUser = useSelector((state: State) => state.userFull.userFull);
    const error = useSelector((state: State) => state.userFull.error);

    const handleClickLogin = () => {
        input && dispatch(getUserFull(input));
        setInput('');
    };

    useEffect(() => {
        if (fullUser.id) {
            dispatch(isLoggedCreator(true));
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('ID', fullUser.id);
            localStorage.setItem('firstName', fullUser.firstName);
            localStorage.setItem('picture', fullUser.picture);
            navigate('/users');
        }
}, [fullUser]);

    useEffect(() => {
        error && console.log(error);
    }, [error]);

    return (
      <>
        <div className="form-login">
          <div className="form-login__title">Вход</div>
          {error && <div className="form-login__error">Пользователь не найден</div>}
          <Form
            className="form-login__form"
            name="login-form"
          >
            <span className="form-login__input-title">ID</span>
            <Form.Item
              name="user-id"
              label=""
              rules={[
                        {
                            required: true,
                            message: 'Необхоидмо указать ID',
                        },
                        {
                            pattern: new RegExp(/^[0-9A-z]*$/, 'g'),
                            message: 'ID должен содержать цифры и буквы латинского алфавита',
                        },
                    ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Введите свой ID"
                onChange={(event) => setInput(event.target.value)}
                value={input}
              />
            </Form.Item>
            <Form.Item name="form-button">
              <Button
                type="primary"
                htmlType="submit"
                className="form-login__button"
                onClick={handleClickLogin}
              >
                Войти
              </Button>
            </Form.Item>
          </Form>
          <div className="form-login__footer-text">
            Еще нет аккаунта?
            {' '}
            <a href="#/registration">Зарегистрироваться</a>
          </div>
        </div>
      </>
    );
};
