import React from 'react';
import { Card } from 'antd';
const ItemGallery = () => {
  return (
    <Card title="Card Title">
      <Card.Grid style={{width: '25%', textAlign: 'center'}}>Content</Card.Grid>
      <Card.Grid hoverable={false} style={{width: '25%', textAlign: 'center'}}>
        Content
      </Card.Grid>
      <Card.Grid style={{width: '25%', textAlign: 'center'}}>Content</Card.Grid>
      <Card.Grid style={{width: '25%', textAlign: 'center'}}>Content</Card.Grid>
      <Card.Grid style={{width: '25%', textAlign: 'center'}}>Content</Card.Grid>
      <Card.Grid style={{width: '25%', textAlign: 'center'}}>Content</Card.Grid>
      <Card.Grid style={{width: '25%', textAlign: 'center'}}>Content</Card.Grid>
    </Card>
  );
};

export default ItemGallery;