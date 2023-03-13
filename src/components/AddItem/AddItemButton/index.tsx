import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import AddItemDrawer from '../AddItemDrawer';

const AddItemButton = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <>
      <Button
        className="btn-primary btn-right add-new"
        onClick={showDrawer}
        size="small"
        icon={<PlusSquareOutlined />}
      />
      {drawerVisible && (
        <AddItemDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
      )}
    </>
  );
};

export default AddItemButton;
