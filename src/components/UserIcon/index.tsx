import React from 'react';
import { Button, Dropdown, List } from 'antd';
import ViewListButton from '../ViewList/ViewListButton';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const data = (home: boolean | undefined) => {
  return [!home && <ViewListButton />, 'Favorites', 'My Profile', 'Account Settings'];
};

interface IUserIcon {
  home?: boolean;
}

const UserIcon: React.FunctionComponent<IUserIcon> = ({ home }) => {
  const dataList = data(home);
  return (
    <Dropdown
      className="user-dropdown"
      placement="bottomRight"
      dropdownRender={() => (
        <List
          className="ant-dropdown-menu"
          size="small"
          header={
            <div>
              <List.Item className="ant-dropdown-menu-item">Header</List.Item>
            </div>
          }
          dataSource={dataList}
          renderItem={item => <List.Item className="ant-dropdown-menu-item">{item}</List.Item>}
        />
      )}
    >
      <Link to="/home">
        <Button
          className="btn-primary"
          shape="round"
          size="small"
          style={{
            width: '30px',
            height: '30px',
            padding: '0',
            margin: '17px 12px 17px 0px'
          }}
        >
          <UserOutlined />
        </Button>
      </Link>
    </Dropdown>
  );
};
export default UserIcon;
