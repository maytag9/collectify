import React, { useState } from 'react';
import ViewListDrawer from '../ViewListDrawer';

const ViewListButton = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <>
      <span className="main-link" onClick={showDrawer}>
        My Collections
      </span>
      {drawerVisible && (
        <ViewListDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
      )}
    </>
  );
};
export default ViewListButton;
