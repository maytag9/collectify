import React, { useEffect } from 'react';
import { Button, Layout, Space, Popover, List, Input, Row, Col } from 'antd';
import Logo from '../Logo';
import AddItemButton from '../AddItem/AddItemButton';
import ViewListButton from '../ViewList/ViewListButton';
import ThemeSwitchButton from '../ThemeButton';
import { UserOutlined } from '@ant-design/icons';
import './styles.css';
import { useNavigate } from 'react-router';

const { Header } = Layout;
const { Search } = Input;

/*const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));*/

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

const data = (home: boolean | undefined) => {
  return [!home && <ViewListButton />, 'Favorites', 'My Profile', 'Account Settings'];
};

interface INavBar {
  mode: boolean;
  setMode: (mode: boolean) => void;
  home?: boolean;
}

const NavBar: React.FunctionComponent<INavBar> = ({ mode, setMode, home }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    if (mode && nav) {
      nav?.classList.add('light');
      nav?.classList.remove('dark');
    }
    if (!mode && nav) {
      nav?.classList.add('dark');
      nav?.classList.remove('light');
    }
  }, [mode]);

  const dataList = data(home);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Header id="nav-bar" className="light" style={{ padding: '0 10px' }}>
        <Row style={{ width: '100%', height: '64px' }}>
          <Col span={12} style={{ height: '64px' }}>
            <Logo />
          </Col>
          <Col span={8} style={{ height: '64px' }}>
            <div style={{ margin: '16px 12px', height: '32px' }}>
              <Search
                placeholder="input search text"
                allowClear
                enterButton
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </Col>
          <Col span={2} style={{ height: '64px' }}>
            {!home && <AddItemButton />}
          </Col>
          <Col span={1} style={{ height: '64px' }}>
            <Popover
              placement="bottomRight"
              title=""
              content={
                <List
                  size="small"
                  header={<div>Header</div>}
                  dataSource={dataList}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              }
              trigger="click"
            >
              <Button
                className="btn-primary btn-right"
                shape="round"
                size="small"
                onClick={() => navigate('/home')}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0',
                  margin: '17px 12px 17px 0px'
                }}
              >
                <UserOutlined />
              </Button>
            </Popover>
          </Col>
          <Col span={1} style={{ height: '64px' }}>
            <ThemeSwitchButton mode={mode} setMode={setMode} />
          </Col>
        </Row>
      </Header>
    </Space>
  );
};
export default NavBar;
