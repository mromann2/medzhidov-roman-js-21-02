import {
 Form, Input, InputNumber, Button,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../api/dumMyApi';
import { UserResponse } from '../../types/dumMyApiResponses';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

interface NewUser {
    firstName: string,
    lastName: string,
    email: string,
    callback: (resp: UserResponse) => void,
    gender?: string,
    title?: string,
    dateOfBirth?: string,
}

export function AddUser() {
    const navigate = useNavigate();

    const onFinish = (values: NewUser) => {
        postUser(values, (data: UserResponse) => navigate(`/userform/${data.id}`));
    };

    return (
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['title']} label="Title" rules={[{ type: 'string', pattern: /^(miss|mr|mrs|ms|dr)$/ }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['firstName']}
          label="FirstName"
          rules={[{
 type: 'string', required: true, min: 2, max: 50,
}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['lastName']}
          label="LastName"
          rules={[{
 type: 'string', required: true, min: 2, max: 50,
}]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['gender']} label="Gender" rules={[{ type: 'string', pattern: /^(male|female|other)$/ }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['email']} label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['dateOfBirth']} label="DateOfBirth" rules={[{ type: 'date' }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['phone']} label="Phone" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
}
