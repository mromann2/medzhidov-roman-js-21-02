import React, { useState } from 'react';
import { Menu } from 'antd';
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface E {
    key: string,
}

export function AppMenu() {
    const [current, setCurrent] = useState('users');

    const handleClick = (e: E) => {
        setCurrent(e.key);
    };

   return (
     <div>
       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
         <Link to="/">
           <Menu.Item key="users" icon={<TeamOutlined />}>
             Пользователи
           </Menu.Item>
         </Link>
         <Link to="/adduser/">
           <Menu.Item key="add-user" icon={<UserAddOutlined />}>
             Добавить пользователя
           </Menu.Item>
         </Link>
       </Menu>
     </div>
);
}
