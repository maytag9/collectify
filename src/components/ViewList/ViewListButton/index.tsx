import React, { useState } from 'react';
import { Button } from 'antd';
import ViewListDrawer from '../ViewListDrawer';

const ViewListButton = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <>
      <Button className="btn-primary btn-right" onClick={showDrawer} size="small">
        My Collections
      </Button>
      {drawerVisible && (
        <ViewListDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
      )}
    </>
  );
};
export default ViewListButton;
