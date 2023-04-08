import React from 'react';
import { Button, Drawer, Space } from 'antd';
import '../styles.css';
import { makeLabel } from '../../../global/global_utils';
import { createItems } from '../AddItemButton';
import CreateItem from './CreateItem';
import CreateCollection from './CreateCollection';

interface IAddItemDrawer {
  drawerVisible: boolean;
  setDrawerVisible: (showDrawer: boolean) => void;
  addType: string | undefined;
}
const AddItemDrawer: React.FunctionComponent<IAddItemDrawer> = ({
  drawerVisible,
  setDrawerVisible,
  addType
}: IAddItemDrawer) => {
  const onClose = () => {
    setDrawerVisible(false);
  };
  const selectedAddType = addType || 'ITEM';

  return (
    <div>
      {drawerVisible && (
        <Drawer
          title={
            <>
              {createItems?.map((item, index) => {
                if (item.key === selectedAddType)
                  return (
                    <div key={index}>
                      {item.icon}
                      &nbsp;&nbsp;
                      {item.label}
                    </div>
                  );
              })}
            </>
          }
          closable={true}
          width={720}
          onClose={onClose}
          destroyOnClose={true}
          open={drawerVisible}
          bodyStyle={{
            paddingBottom: 80
          }}
          extra={
            <Space className="btn-wrapper">
              <Button className="btn-secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button className="btn-primary" onClick={onClose} type="primary">
                Create {makeLabel(selectedAddType)}
              </Button>
            </Space>
          }
        >
          {selectedAddType === 'ITEM' && <CreateItem />}
          {selectedAddType === 'COLLECTION' && <CreateCollection />}
        </Drawer>
      )}
    </div>
  );
};

export default AddItemDrawer;
