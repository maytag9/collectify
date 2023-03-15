import React from 'react';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import './styles.css';
interface IThemeButton {
  mode: boolean;
  setMode: (mode: boolean) => void;
}
const ThemeButton: React.FunctionComponent<IThemeButton> = ({ mode, setMode }) => {
  return (
    <Space direction="vertical" className="theme-switch-wrapper">
      <Button
        className="theme-switch"
        icon={mode ? <BulbOutlined /> : <BulbFilled />}
        size="small"
        onClick={() => {
          setMode(!mode);
        }}
      />
    </Space>
  );
};

export default ThemeButton;
