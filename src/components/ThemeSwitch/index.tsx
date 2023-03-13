import React from 'react';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import './styles.css';
interface IThemeSwitch {
  mode: boolean;
  setMode: (mode: boolean) => void;
}
const ThemeSwitch: React.FunctionComponent<IThemeSwitch> = ({ mode, setMode }) => {
  return (
    <Space direction="vertical" className="theme-switch-wrapper">
      <Switch
        className="theme-switch"
        checkedChildren={<BulbOutlined />}
        unCheckedChildren={<BulbFilled />}
        size="small"
        onClick={() => {
          setMode(!mode);
          const nav = document.getElementById('nav-bar');
          console.log('nav');
          if (mode && nav) {
            nav?.classList.add('dark');
            nav?.classList.remove('light');
          }
          if (!mode && nav) {
            nav?.classList.add('light');
            nav?.classList.remove('dark');
          }
        }}
      />
    </Space>
  );
};

export default ThemeSwitch;
