import React from 'react';
import { Card } from 'antd';

const bannerStyle = {
  backgroundColor: '#000000',
  overflow: 'hidden',
  borderRadius: '0',
  height: '200px',
  border: '0',
};

const ListBanner = () => {
  return (
    <Card id="listBanner" style={bannerStyle}>
      <div id="cursor"><span></span></div>
      <div className="wrapper">
        <div className="c-portrait c-portrait-one">
          <svg width="100%" height="100%">
            <defs>
              <clipPath id="clipping-one">
                <rect className="mask-one c-mask" x="40%" y="30%" width="40%" height="50%"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="c-portrait c-portrait-two">
          <svg width="100%" height="100%">
            <defs>
              <clipPath id="clipping-two">
                <rect className="mask-two c-mask" x="15%" y="15%" width="50%" height="30%"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="c-portrait c-portrait-three">
          <svg width="100%" height="100%">
            <defs>
              <clipPath id="clipping-three">
                <rect className="mask-three c-mask" x="52%" y="60%" width="40%" height="30%"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default ListBanner;