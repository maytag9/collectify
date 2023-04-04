import React from 'react';
import { Row, Col, Dropdown, List, Space } from 'antd';
import ViewListButton from '../ViewList/ViewListButton';
import { Link } from 'react-router-dom';
import UserIcon from '../UserIcon';

const data = (home: boolean | undefined) => {
  return [!home && <ViewListButton />, 'Favorites', 'My Profile', 'Account Settings'];
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
              <Row align="bottom">
                <Col>
                  <UserIcon />
                </Col>
                <Col>
                  <Space direction="vertical">
                    <span>Username</span>
                    <span>admin</span>
                  </Space>
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
