import React from 'react';
import { Button, Drawer, Space, Row, Col } from 'antd';
import '../styles.css';
interface IAddItemDrawer {
  drawerVisible: boolean;
  setDrawerVisible: (showDrawer: boolean) => void;
}
const AddItemDrawer: React.FunctionComponent<IAddItemDrawer> = ({
  drawerVisible,
  setDrawerVisible
}: IAddItemDrawer) => {
  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      {drawerVisible && (
        <Drawer
          title="Add a new item"
          closable={true}
          width={720}
          onClose={onClose}
          destroyOnClose={true}
          open={drawerVisible}
          bodyStyle={{
            paddingBottom: 80
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Row justify="space-between">
            <Col>
              <div className="select-item-type">
                <span>Any</span>
              </div>
            </Col>
            <Col>
              <div className="select-item-type">Movie</div>
            </Col>
            <Col>
              <div className="select-item-type">Book</div>
            </Col>
            <Col>
              <div className="select-item-type">Fashion</div>
            </Col>
          </Row>
        </Drawer>
      )}
    </>
  );
};

export default AddItemDrawer;
