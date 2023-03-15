import React, { useState } from 'react';
import { Button, Dropdown } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import AddItemDrawer from '../AddItemDrawer';

const items = [
  {
    key: '1',
    label: 'New Item'
  },
  {
    key: '2',
    label: 'New Collection'
  }
];

const AddItemButton = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <Dropdown.Button menu={{ items }} className="btn-right add-new" style={{ padding: '0' }}>
      <Button
        onClick={showDrawer}
        size="small"
        icon={<PlusSquareOutlined />}
        style={{
          backgroundColor: 'transparent',
          padding: '0',
          margin: '0'
        }}
      />
      {drawerVisible && (
        <AddItemDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
      )}
    </Dropdown.Button>
  );
};

export default AddItemButton;
