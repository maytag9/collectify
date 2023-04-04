import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserIcon: React.FunctionComponent = () => {
  return (
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
  );
};
export default UserIcon;
