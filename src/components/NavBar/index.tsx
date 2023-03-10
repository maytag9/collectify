import React from "react";
import { Layout, Space } from 'antd';
import Logo from '../Logo';
import AddItemButton from '../AddItemButton';
import ThemeSwitch from '../ThemeSwitch';
import './styles.css';

const { Header } = Layout;

/*const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));*/

/*const themeStyle = (themeMode) => {
  return {
    backgroundColor: themeMode !== 'dark' ? '#ffffff' : '#001529',
    color: themeMode !== 'dark' ? 'rgba(0, 0, 0, 0.88)' : 'rgba(255, 255, 255, 0.75)',
  }
}*/

/*const NavBar = (themeMode, themeSecondary) => {
  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Header theme={themeMode} style={themeStyle(themeMode)}>
        <Logo themeMode={themeMode}/>
        <AddItemButton theme={themeSecondary}/>
        <NavMenu themeMode={themeMode} />
      </Header>
    </Space>
  );
};*/

const NavBar = () => {
  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Header id="nav-bar" className='light'>
        <Logo/>
        <AddItemButton/>
        <ThemeSwitch/>
      </Header>
    </Space>
  );
};
export default NavBar;