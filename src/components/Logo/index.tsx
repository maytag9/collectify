import React from 'react';
import { useNavigate } from 'react-router';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="logo"
      style={{
        float: 'left',
        width: '200px',
        height: '64px'
      }}
      onClick={() => navigate('/')}
    >
      <img
        alt="collectify logo"
        src="https://i.imgur.com/8UDPhnt.png"
        style={{
          width: '185px',
          padding: '8px',
          margin: '0px'
        }}
      />
    </div>
  );
};

export default Logo;
