import React from "react";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="logo"
      style={{
        float: 'left',
        width: 120,
        // background: themeMode != 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
      }}
      onClick={() => navigate('/')}
    >
      {/*<h2 style={{padding: '0px', margin: '0px'}}>Collectify</h2>*/}
      <img alt="collectify logo" src="https://i.imgur.com/8UDPhnt.png" style={{
        width: '185px',
        padding: '8px',
        margin: '0px',
      }}/>
    </div>
  )};

export default Logo;