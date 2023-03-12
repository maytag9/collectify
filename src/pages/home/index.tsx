import React from "react";
import { Layout, Carousel } from "antd";
import NavWrapper from "../../components/NavWrapper";

const { Header } = Layout;
const Home = () => {
  return (<>
    <NavWrapper navbar={true} content={
        <Layout>
          <Header>
            <Carousel dots={true}>
              <div>
                <h3 style={{
                  height: '160px',
                  color: '#fff',
                  lineHeight: '160px',
                  textAlign: 'center',
                  backgroundImage: "url('../../images/movie-covers/fight_club-1.webp')",
                }}>1</h3>
              </div>
              <div>
                <h3 style={{
                  height: '160px',
                  color: '#fff',
                  lineHeight: '160px',
                  textAlign: 'center',
                  backgroundImage: "url('../../images/movie-covers/fight_club-1.webp')",
                }}>2</h3>
              </div>
              <div>
                <h3 style={{
                  height: '160px',
                  color: '#fff',
                  lineHeight: '160px',
                  textAlign: 'center',
                  backgroundImage: "url('../../images/movie-covers/equilibrium-1.jpg')",
                }}>3</h3>
              </div>
              <div>
                <h3 style={{
                  height: '160px',
                  color: '#fff',
                  lineHeight: '160px',
                  textAlign: 'center',
                  backgroundImage: "url('../../images/movie-covers/fight_club-1.webp')",
                }}>4</h3>
              </div>
            </Carousel>
          </Header>
        </Layout>
      }
    />
  </>)
};

export default Home;