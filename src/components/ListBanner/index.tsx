import React from 'react';
import { Card } from 'antd';
import './styles.css';

const ListBanner = () => {
  return (
    <Card id="listBanner">
      <h1>MOVIES</h1>
      <div className="wrapper" />
      <div className="bg-wrapper" />
    </Card>
  );
};

export default ListBanner;
