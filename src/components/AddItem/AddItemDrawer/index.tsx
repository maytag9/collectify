import React, { useState } from 'react';
import { Button, Drawer, Space, Row, Col, Card } from 'antd';
import '../styles.css';
import {
  ReloadOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  ReadOutlined,
  SkinOutlined
} from '@ant-design/icons';
import FormByItemType from '../AddItemForms/FormByItemType';
import { makeLabel } from '../../../global/global_utils';
import { createItems } from '../AddItemButton';

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
  const [itemType, setItemType] = useState<string | undefined>(undefined);
  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      {drawerVisible && (
        <Drawer
          title={
            <>
              {createItems?.map((item, index) => {
                if (item.key === addType)
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
                Create {makeLabel(addType)}
              </Button>
            </Space>
          }
        >
          <Card
            className="add-item-card"
            title={
              <>
                <h3>{!itemType ? 'Select an Item Type:' : `Item Type: ${itemType}`}</h3>
              </>
            }
            extra={
              <Button
                title="Reset Item Type"
                shape="round"
                size="small"
                icon={<ReloadOutlined />}
                onClick={() => setItemType(undefined)}
              />
            }
          >
            {!itemType ? (
              <Row justify="space-between">
                <Col>
                  <div className="select-item-type" onClick={() => setItemType('Any')}>
                    <div className="item-type-icon">
                      <PictureOutlined />
                    </div>
                    <span>Any</span>
                  </div>
                </Col>
                <Col>
                  <div className="select-item-type" onClick={() => setItemType('Movie')}>
                    <div className="item-type-icon">
                      <PlaySquareOutlined />
                    </div>
                    <span>Movie</span>
                  </div>
                </Col>
                <Col>
                  <div className="select-item-type" onClick={() => setItemType('Book')}>
                    <div className="item-type-icon">
                      <ReadOutlined />
                    </div>
                    <span>Book</span>
                  </div>
                </Col>
                <Col>
                  <div className="select-item-type" onClick={() => setItemType('Fashion')}>
                    <div className="item-type-icon">
                      <SkinOutlined />
                    </div>
                    <span>Fashion</span>
                  </div>
                </Col>
              </Row>
            ) : (
              <FormByItemType itemType={itemType} />
            )}
          </Card>
        </Drawer>
      )}
    </div>
  );
};

export default AddItemDrawer;
