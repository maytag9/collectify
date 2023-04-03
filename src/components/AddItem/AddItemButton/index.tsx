import React, { useState } from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { PlusSquareOutlined, DownOutlined } from '@ant-design/icons';
import AddItemDrawer from '../AddItemDrawer';

const items = [
  {
    key: 'ITEM',
    label: 'New Item'
  },
  {
    key: 'COLLECTION',
    label: 'New Collection'
  }
];

const AddItemButton = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [addType, setAddType] = useState<string | undefined>(undefined);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClick: MenuProps['onClick'] = ({ key }) => {
    setAddType(key);
    showDrawer();
  };
  return (
    <>
      <Dropdown menu={{ items, onClick }} className="add-new">
        <a
          onClick={e => {
            e.preventDefault();
            showDrawer();
          }}
        >
          <PlusSquareOutlined />
          &nbsp; Create &nbsp;
          <DownOutlined />
        </a>
      </Dropdown>
      {drawerVisible && (
        <AddItemDrawer
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          addType={addType}
        />
      )}
    </>
  );
};

export default AddItemButton;
