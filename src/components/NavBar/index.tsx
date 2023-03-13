import React from 'react';
import { Button, Layout, Space } from 'antd';
import Logo from '../Logo';
import AddItemButton from '../AddItem/AddItemButton';
import ViewListButton from '../ViewListButton';
import ThemeSwitch from '../ThemeSwitch';
import { UserOutlined } from '@ant-design/icons';
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

interface INavBar {
  mode: boolean;
  setMode: (mode: boolean) => void;
  home?: boolean;
}

const NavBar: React.FunctionComponent<INavBar> = ({ mode, setMode, home }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Header id="nav-bar" className="light">
        <Logo />
        {!home && (
          <Button
            className="btn-primary btn-right"
            shape="round"
            size="small"
            style={{ width: '30px', height: '30px', padding: '0', margin: '17px 12px 17px 0px' }}
          >
            <UserOutlined />
          </Button>
        )}
        {!home && <ViewListButton />}
        {!home && <AddItemButton />}

        <ThemeSwitch mode={mode} setMode={setMode} />
      </Header>
    </Space>
  );
};
export default NavBar;
