import React, { useEffect } from 'react';
import { Layout, Space, Input, Row, Col } from 'antd';
import Logo from '../Logo';
import AddItemButton from '../AddItem/AddItemButton';
import ThemeSwitchButton from '../ThemeButton';
import { SearchOutlined } from '@ant-design/icons';
import './styles.css';
import UserIcon from '../UserIcon';

const { Header } = Layout;

interface INavBar {
  mode: boolean;
  setMode: (mode: boolean) => void;
  home?: boolean;
}

const NavBar: React.FunctionComponent<INavBar> = ({ mode, setMode, home }) => {
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
            <UserIcon home={home} />
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
