import React from 'react';
import { Drawer, Space, Avatar, List, Input } from 'antd';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  UnlockFilled,
  LockFilled
} from '@ant-design/icons';
import '../styles.css';
import { useNavigate } from 'react-router';

const { Search } = Input;

interface IViewListDrawer {
  drawerVisible: boolean;
  setDrawerVisible: (showDrawer: boolean) => void;
}
const ViewListDrawer: React.FunctionComponent<IViewListDrawer> = ({
  drawerVisible,
  setDrawerVisible
}: IViewListDrawer) => {
  const navigate = useNavigate();
  const onClose = () => {
    setDrawerVisible(false);
  };
  const onSearch = (value: string) => console.log(value);

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const data = Array.from({ length: 10 }).map((_, i) => ({
    privacy: false,
    title: `Collection ${i + 1}`,
    avatar: `https://joesch.moe/api/v1/random?key=${i}`,
    owner: 'Jeniffer Lawrence',
    description: 'This collection is all the movies I have seen or want to see.',
    comments: [
      {
        username: 'jazznchicken',
        name: 'Sebastion',
        message: 'Great collection!',
        avatar: `https://joesch.moe/api/v1/random?key=${i}`
      },
      {
        username: 'bestboss',
        name: 'Micheal Scott',
        message: 'You should add the Harry Potter movies!',
        avatar: `https://joesch.moe/api/v1/random?key=${i}`
      }
    ],
    banner: 'https://i.imgur.com/fscWLMg.png'
  }));

  return (
    <div>
      {drawerVisible && (
        <Drawer
          title="My Collections"
          closable={true}
          width={720}
          onClose={onClose}
          destroyOnClose={true}
          open={drawerVisible}
          bodyStyle={{ paddingBottom: 80 }}
          extra={
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 300 }}
                enterButton
              />
            </Space>
          }
        >
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 5
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText
                    icon={MessageOutlined}
                    text={`${item.comments?.length}`}
                    key="list-vertical-message"
                  />
                ]}
                extra={<img alt="collection cover image" src={item.banner} />}
              >
                <List.Item.Meta
                  // avatar={<Avatar src={item.avatar} />}
                  title={
                    <a onClick={() => navigate('/collections')}>
                      {item.title}
                      &nbsp;&nbsp;&nbsp;
                      {item.privacy ? <LockFilled /> : <UnlockFilled />}
                    </a>
                  }
                  description={
                    <>
                      <Avatar src={item.avatar} /> {item.owner}
                    </>
                  }
                />
                {item.description}
              </List.Item>
            )}
          />
        </Drawer>
      )}
    </div>
  );
};

export default ViewListDrawer;
