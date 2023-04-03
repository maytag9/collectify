import React, { useEffect } from 'react';
import { Button, Layout, Space, Popover, List, Input, Row, Col } from 'antd';
import Logo from '../Logo';
import AddItemButton from '../AddItem/AddItemButton';
import ViewListButton from '../ViewList/ViewListButton';
import ThemeSwitchButton from '../ThemeButton';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import './styles.css';
import { useNavigate } from 'react-router';

const { Header } = Layout;
// const { Search } = Input;

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
    const body = document.getElementById('body');

    if (mode && nav) {
      nav?.classList.add('light');
      nav?.classList.remove('dark');
      body?.classList.add('light');
      body?.classList.remove('dark');
    }
    if (!mode && nav) {
      nav?.classList.add('dark');
      nav?.classList.remove('light');
      body?.classList.add('dark');
      body?.classList.remove('light');
    }
  }, [mode]);

  const dataList = data(home);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Header id="nav-bar" className="light" style={{ padding: '0 10px' }}>
        <Row style={{ width: '100%', height: '64px' }}>
          <Col md={13} xs={12} style={{ height: '64px' }}>
            <Logo />
          </Col>
          <Col md={6} xs={6} style={{ height: '64px' }}>
            <div>
              <Input
                allowClear
                className="search-bar"
                suffix={<SearchOutlined className="search-icon" />}
              />
            </div>
          </Col>
          <Col md={3} xs={0} style={{ height: '64px', textAlign: 'center' }}>
            {!home && <AddItemButton />}
          </Col>
          <Col md={0} xs={2} style={{ height: '64px', textAlign: 'center' }}>
            &nbsp;
          </Col>
          <Col md={1} xs={3} style={{ height: '64px' }}>
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
                className="btn-primary"
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
          <Col md={1} xs={1} style={{ height: '64px' }}>
            <ThemeSwitchButton mode={mode} setMode={setMode} />
          </Col>
        </Row>
      </Header>
    </Space>
  );
};
export default NavBar;
