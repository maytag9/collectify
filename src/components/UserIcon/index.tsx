import React from 'react';
import { Button, Popover, List } from 'antd';
import ViewListButton from '../ViewList/ViewListButton';
import { UserOutlined } from '@ant-design/icons';
import './styles.css';
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
    </Popover>
  );
};
export default UserIcon;
