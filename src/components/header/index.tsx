import { Menu, MenuProps } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [current, setCurrent] = React.useState('create-users');
  const onClick: MenuProps['onClick'] = (event) => {
    setCurrent(event.key);
  };

  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'white',
    padding: '1.3rem',
    fontSize: '1.3rem',
  };
  const menuItems: MenuProps['items'] = [
    {
      label: (
        <Link to="/users/create" style={linkStyle}>
          Create Users
        </Link>
      ),
      type: 'group',
    },
    {
      label: (
        <Link to="/users/view" style={linkStyle}>
          View Users
        </Link>
      ),
      type: 'group',
    },
  ];

  return (
    <>
      <Menu
        onClick={onClick}
        theme="dark"
        selectedKeys={[current]}
        mode="horizontal"
        items={menuItems}
      />
    </>
  );
};

export default Header;
