import { Breadcrumb, Layout } from 'antd';
import '../../App.css';
import React from 'react';
import ItemGallery from '../ItemGallery';
import MovieGallery from '../MovieGallery';
import ListBanner from '../ListBanner';

const { Content, Footer } = Layout;

const MainWrapper = () => {
  return (
    <Layout>
      {/*<SideMenu
				theme={themeMode}
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>*/}
      <ListBanner/>
      <Layout style={{padding: '0 24px 24px'}}>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <ItemGallery />
          <br/>
          <MovieGallery/>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Collectify ©2023 Created by Maytag @insert-company-name-here?
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainWrapper;