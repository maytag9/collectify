import React from 'react';
import { Carousel } from 'antd';
import NavWrapper from '../../components/NavWrapper';

const Home = () => {
  return (
    <>
      <NavWrapper
        navbar={true}
        content={
          <>
            <Carousel dots={true}>
              <div>
                <h3
                  style={{
                    height: '96vh',
                    backgroundImage: "url('https://i.imgur.com/0e8oBcs.png')",
                    margin: '0',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top'
                  }}
                />
              </div>
            </Carousel>
          </>
        }
      />
    </>
  );
};

export default Home;
