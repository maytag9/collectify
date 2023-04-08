import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'antd';
import '../styles.css';
import {
  PictureOutlined,
  PlaySquareOutlined,
  ReadOutlined,
  ReloadOutlined,
  SkinOutlined
} from '@ant-design/icons';
import FormByItemType from '../AddItemForms/FormByItemType';

const CreateItem: React.FunctionComponent = () => {
  const [itemType, setItemType] = useState<string | undefined>(undefined);

  return (
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
  );
};

export default CreateItem;
