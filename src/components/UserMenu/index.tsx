import React from 'react';
import { Row, Col, Dropdown, List, Space } from 'antd';
import ViewListButton from '../ViewList/ViewListButton';
import { Link } from 'react-router-dom';
import UserIcon from '../UserIcon';

const data = (home: boolean | undefined) => {
  return !home
    ? [
        <div key={0}>
          <ViewListButton />
        </div>,
        'Favorites',
        'My Profile',
        'Account Settings'
      ]
    : ['Favorites', 'My Profile', 'Account Settings'];
};

interface IUserMenu {
  home?: boolean;
}

const UserMenu: React.FunctionComponent<IUserMenu> = ({ home }) => {
  const dataList = data(home);

  const DropDownList = () => {
    return (
      <List
        className="ant-dropdown-menu"
        size="small"
        header={
          <Space>
            <List.Item className="ant-dropdown-menu-item">
              <Row align="top">
                <Col>
                  <UserIcon />
                </Col>
                <Col>
                  <div>Username</div>
                  <div style={{ fontSize: '11px', lineHeight: '13px' }}>admin</div>
                </Col>
              </Row>
            </List.Item>
          </Space>
        }
        dataSource={dataList}
        renderItem={item => <List.Item className="ant-dropdown-menu-item">{item}</List.Item>}
      />
    );
  };

  return (
    <Dropdown
      className="user-dropdown"
      placement="bottomRight"
      dropdownRender={() => <DropDownList />}
    >
      <Link to="/home">
        <UserIcon />
      </Link>
    </Dropdown>
  );
};
export default UserMenu;
