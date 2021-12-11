import React from 'react';
import './Registration.scss';
import { useNavigate } from 'react-router-dom';
import {
    Button, DatePicker, Form, Input, Radio,
} from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons/lib';
import { UserFullData } from '../../types/API';
import { postNewUser } from '../../api/dummyAPI';


export const Registration = () => {
    const navigate = useNavigate();
    const onFinish = (values: UserFullData) => {
        postNewUser(values, (data: UserFullData) => navigate(`/user/${data.id}`));
    };

    return (
      <div className="form-registration">
        <div className="form-registration__title">Регистрация</div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Form
          className="form-registration__form"
          name="registration-form"
          onFinish={onFinish}
        >
          <span className="form-registration__input-title">Имя</span>
          <Form.Item
            name="firstName"
            hasFeedback
            rules={[
                        {
                            required: true,
                            message: 'Введите свое имя',
                        },
                        {
                            min: 2,
                            max: 50,
                            message: 'Длина имени должна быть от 2 до 50 символов',
                        },
                        {
                            pattern: new RegExp(/^[A-zА-я]*$/, 'g'),
                            message: 'Имя должно содержать буквы латинского алфавита или кирилицы',
                        },
                        {
                            whitespace: true,
                            message: 'Имя не должно содержать пробелов',
                        },
                    ]}
          >
            <Input placeholder="Введите имя" />
          </Form.Item>
          <span className="form-registration__input-title">Фамилия</span>
          <Form.Item
            name="lastName"
            hasFeedback
            rules={[
                        {
                            required: true,
                            message: 'Введите свою фамилию',
                        },
                        {
                            min: 2,
                            max: 50,
                            message: 'Длина имени должна быть от 2 до 50 символов',
                        },
                        {
                            pattern: new RegExp(/^[A-zА-я]*$/, 'g'),
                            message: 'Фамилия должна содержать буквы латинского алфавита или кирилицы',
                        },
                        {
                            whitespace: true,
                            message: 'Фамилия не должна содержать пробелов',
                        },
                    ]}
          >
            <Input placeholder="Введите фамилию" />
          </Form.Item>
          <span className="form-registration__input-title">Пол</span>
          <Form.Item
            name="gender"
            hasFeedback
            className="form-registration__form__gender"
            rules={[
                        {
                            required: true,
                            message: 'Укажите Ваш пол',
                        },
                    ]}
          >
            <Radio.Group>
              <Radio value="male">Мужчина</Radio>
              <Radio value="female">Женщина</Radio>
            </Radio.Group>
          </Form.Item>
          <span className="form-registration__input-title">Дата рождения</span>
          <Form.Item
            name="dayOfBirth"
            hasFeedback
            rules={[
                        {
                            required: true,
                            message: 'Введите дату рождения',
                        },
                    ]}
          >
            <DatePicker />
          </Form.Item>
          <span className="form-registration__input-title">E-mail</span>
          <Form.Item
            name="email"
            hasFeedback
            rules={[
                        {
                            type: 'email',
                            message: 'Введите корректный e-mail (например, any@example.com)',
                        },
                        {
                            required: true,
                            message: 'Введите e-mail',
                        },
                    ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>
          <span className="form-registration__input-title">Телефон</span>
          <Form.Item
            name="phone"
            hasFeedback
            rules={[
                        {
                            required: true,
                            message: 'Введите свой номер телефона',
                        },
                        {
                            pattern: new RegExp(/^[0-9]*$/, 'g'),
                            message: 'Номер телефона должен содержать только цифры',
                        },
                        {
                            whitespace: true,
                            message: 'Введите номер телефона без пробелов',
                        },
                    ]}
          >
            <Input prefix={<PhoneOutlined />} />
          </Form.Item>
          <Form.Item name="form-button">
            <Button
              type="primary"
              htmlType="submit"
              className="form-registration__button"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
        <div className="form-registration__footer-text">
          Уже есть аккаунт?
          {' '}
          <a href="#/login">Войти</a>
        </div>
      </div>
    );
};
