import React from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

// const { Meta } = Card;

const items = [
  /*{
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/equilibrium-1.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/batman-1.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/forest_gump-1.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/interstellar-2.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/inglourious_basterds-2.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/pulp_fiction-18.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/taxi_driver-0.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "../../images/movie-covers/spiderman_miles-2.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },*/
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/JJC3A0P.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/UBLzQEe.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/0f8qXl0.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/pMO4GoQ.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/G6da2r8.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/O3bIJHl.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/f9v0SNI.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/uy7p0P6.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/VACk9jq.jpg",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/hOv4THG.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/VHKeMw4.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
  {
    imgAlt: "example",
    imgSrc: "https://i.imgur.com/3sCGHxa.png",
    actions: true,
    avatarSrc:"https://joesch.moe/api/v1/random",
    title:"Card title",
    description:"This is the description",
  },
];

const MovieGallery = () => {
  return (<>
    <Row justify='space-around'>
      {items.map((item, key) => {
        return (
          <Col xl={5} lg={6} md={6} sm={8} xs={12} key={key}>
            <Card
              style={{margin: '10px !important', padding: '0 10px', background: 'transparent', border: 'none', boxShadow: 'none'}}
              bordered={false}
              cover={
                <img
                  alt={item.imgAlt}
                  src={item.imgSrc}
                />
              }
              /*actions={item.actions && [
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
              ]}*/
            >
              {/*<Meta
										avatar={item.avatarSrc && <Avatar src={item.avatarSrc} />}
										title={item.title}
										description={item.description}
								/>*/}
            </Card>
          </Col>
        )})
      }
    </Row>
  </>);
};

export default MovieGallery;