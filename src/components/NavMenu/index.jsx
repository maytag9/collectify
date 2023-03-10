import React from 'react';
import { Menu } from 'antd';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const NavMenu = (themeMode) => {

  return (
    <Menu
      theme={themeMode}
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items1}
    />
  );
};

export default NavMenu;