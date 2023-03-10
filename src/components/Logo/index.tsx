import React from "react";

const Logo = () => {
  return (
    <div
      className="logo"
      style={{
        float: 'left',
        width: 120,
        // background: themeMode != 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <h1 style={{padding: '0px', margin: '0px'}}>Collectify</h1>
    </div>
  )};

export default Logo;