import './styles.less'
import React from 'react';
// import React, {useEffect, useState} from 'react';
// import useWindowDimensions from './windowDimensions';
const MainBanner = () => {
  /*const [mousePos, setMousePos] = useState({});
  const { height, width } = useWindowDimensions();

  const maskOne = document.getElementById('mask_one');
  const maskTwo = document.getElementById('mask_two');
  const maskThree = document.getElementById('mask_three');
  const cursor = document.getElementById('cursor');
  const moveMask = (event: any, maskEl: any, operX: any, operY: any) => {
    const winX = width/2;
    const winY = height/2;
    const posX = ((event.pageX - winX)/ operX).toFixed(0);
    const posY = ((event.pageY - winY)/ operY).toFixed(0);

    maskEl?.style?.setProperty('transform', `translate(${posX}px, ${posY}px)`);
  };
  const resetPos = (maskEl: any) => {
    maskEl?.style.setProperty('transform', 'translate(0, 0)');
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      setTimeout(moveMask(event, maskOne, 4, 4), 1600);
      setTimeout(moveMask(event, maskTwo, 8, 4), 2800);
      setTimeout(moveMask(event, maskThree, 8, 4), 500);

      const posX = event.pageX;
      const posY = event.pageY;

      cursor?.style?.setProperty('transform', `translate(${posX}px, ${posY}px`);
    };
    const handleMouseLeave = () => {
      resetPos(maskOne);
      resetPos(maskTwo);
      resetPos(maskThree);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove',handleMouseMove);
      window.removeEventListener('mouseleave',handleMouseLeave);
    };
  }, []);
  */
  return (<>
    <div id="cursor"><span></span></div>

    <div className="c-portrait c-portrait__one">
      <svg width="100%" height="100%">
        <defs>
          <clipPath id="clipping-one">
            <rect id='mask_one' className="c-mask__one c-mask" x="40%" y="30%" width="40%" height="50%"/>
          </clipPath>
        </defs>
      </svg>
    </div>

    <div className="c-portrait c-portrait__two">
      <svg width="100%" height="100%">
        <defs>
          <clipPath id="clipping-two">
            <rect id='mask_two' className="c-mask__two c-mask" x="15%" y="15%" width="50%" height="30%"/>
          </clipPath>
        </defs>
      </svg>
    </div>

    <div className="c-portrait c-portrait__three">
      <svg width="100%" height="100%">
        <defs>
          <clipPath id="clipping-three">
            <rect id='mask_three' className="c-mask__three c-mask" x="52%" y="60%" width="40%" height="30%"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </>);
};

export default MainBanner;