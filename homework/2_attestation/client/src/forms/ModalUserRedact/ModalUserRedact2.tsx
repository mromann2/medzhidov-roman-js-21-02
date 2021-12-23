import React from 'react';
import './ModalUserRedact2.scss';
import { useSelector } from 'react-redux';
import {
 Button, DatePicker, Form, Input, Radio,
} from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { State } from '../../types/state';
import { UserFullData } from '../../types/API';
import { updateUser } from '../../api/dummyAPI';

interface Props {
    active: boolean,
    setActive(active: boolean): void,
}

export const ModalUserRedact2 = ({ active, setActive }: Props) => {
    const fullUser = useSelector((state: State) => state.userFull.userFull);
    const navigate = useNavigate();
    const onFinish = (values: UserFullData) => {
        updateUser({ ...values, id: fullUser.id }, (data: UserFullData) => navigate(`/user/${data.id}`));
        setActive(false);
    };

    return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className="form__user modal__content" onClick={(e) => e.stopPropagation()}>

          <div className="form-redact">
            <div className="form__picture">
              <img src={`${fullUser.picture}`} alt="User-face" />
            </div>
            <Form
              className="form-redact__form"
              name="form-redact-form"
              onFinish={onFinish}
            >
              <div className="form-redact__pair-container">
                <span className="form-redact__input-title">Имя</span>
                <Form.Item
                  name="firstName"
                  hasFeedback
                  initialValue={`${fullUser.firstName}`}
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
              </div>
              <div className="form-redact__pair-container">
                <span className="form-redact__input-title">Фамилия</span>
                <Form.Item
                  name="lastName"
                  hasFeedback
                  initialValue={`${fullUser.lastName}`}
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
              </div>
              <div className="form-redact__pair-container">
                <span className="form-redact__input-title">Пол</span>
                <Form.Item
                  name="gender"
                  hasFeedback
                  initialValue={`${fullUser.gender}`}
                  className="form-redact__form__gender"
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
              </div>
              <div className="form-redact__pair-container">
                <span className="form-redact__input-title">E-mail</span>
                <Form.Item
                  name="email"
                  hasFeedback
                  initialValue={`${fullUser.email}`}
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
              </div>
              <div className="form-redact__pair-container">
                <span className="form-redact__input-title">Телефон</span>
                <Form.Item
                  name="phone"
                  hasFeedback
                  initialValue={`${fullUser.phone}`}
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
              </div>
              <Form.Item name="form-button">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="form-redact__button"
                >
                  Сохранить
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

    );
};
