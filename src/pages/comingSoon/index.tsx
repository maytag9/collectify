import React from 'react';
import { Carousel, Col, Row } from 'antd';
import NavWrapper from '../../components/NavWrapper';

const ComingSoon = () => {
  return (
    <>
      <NavWrapper
        navbar={true}
        home={true}
        content={
          <>
            <Row style={{ position: 'absolute', zIndex: '500', width: '100%' }}>
              <Col span={24}>
                <h1
                  style={{
                    height: '50vh',
                    color: '#fff',
                    lineHeight: '70vh',
                    textAlign: 'center',
                    margin: 'auto',
                    padding: '60px',
                    fontSize: '60px',
                    zIndex: '500'
                  }}
                >
                  COMING SOON
                </h1>
              </Col>
            </Row>
            <Carousel autoplay={true} dots={true}>
              <div>
                <div
                  style={{
                    height: '96vh',
                    backgroundImage: "url('https://i.imgur.com/mHCae9Q.png')",
                    margin: '0',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.5)' //'grayscale(1)',
                  }}
                />
              </div>
              {/*<div>
                <h3
                  style={{
                    height: '96vh',
                    backgroundImage: "url('https://i.imgur.com/2EMkAsU.png')",
                    margin: '0',
                    // backgroundSize: '2400px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
              </div>*/}
              <div>
                <h3
                  style={{
                    height: '96vh',
                    backgroundImage: "url('https://i.imgur.com/rwIUWaM.jpg')",
                    margin: '0',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
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
              <div>
                <h3
                  style={{
                    height: '96vh',
                    backgroundImage: "url('https://i.imgur.com/6JBQhUs.jpg')",
                    margin: '0',
                    backgroundSize: 'cover'
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

export default ComingSoon;
