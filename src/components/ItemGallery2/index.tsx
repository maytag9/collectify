import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';

const { Meta } = Card;

const items = [
  {
    imgAlt: "example",
    imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
];

const ItemGallery2 = () => {
  return (<>
    <Row gutter={16}>
      {items.map((item, key) => {
        return (
          <Col span={6} key={key}>
            <Card
              style={{width: 300,}}
              bordered={false}
              cover={
                <img
                  alt={item.imgAlt}
                  src={item.imgSrc}
                />
              }
              actions={item.actions ? [
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ] : []}
            >
              <Meta
                avatar={item.avatarSrc && <Avatar src={item.avatarSrc} />}
                title={item.title}
                description={item.description}
              />
            </Card>
          </Col>
        )})
      }
    </Row>
  </>);
};

export default ItemGallery2;