import React from 'react';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import './styles.css';

const ThemeSwitch = () => (
  <Space direction="vertical" className="theme-switch-wrapper">
    <Switch
      className="theme-switch"
      checkedChildren={<BulbOutlined />}
      unCheckedChildren={<BulbFilled />}
      size="small"
    />
  </Space>
);

export default ThemeSwitch;