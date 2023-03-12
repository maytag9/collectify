import React, {useState} from 'react';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import './styles.css';

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(true);

  return (<Space direction="vertical" className="theme-switch-wrapper">
    <Switch
      className="theme-switch"
      checkedChildren={<BulbOutlined />}
      unCheckedChildren={<BulbFilled />}
      size="small"
      onClick={() => {
          setChecked(!checked);
          const nav = document.getElementById('nav-bar');
          console.log('nav')
          if (checked && nav) {
            nav?.classList.add("dark");
            nav?.classList.remove("light")
          }
          if (!checked && nav) {
            nav?.classList.add("light");
            nav?.classList.remove("dark")
          }
        }
      }
    />
  </Space>
  );
};

export default ThemeSwitch;