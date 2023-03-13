import React, { ReactNode, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
interface INavWrap {
  content: ReactNode;
  navbar: boolean;
  home?: boolean;
}
const NavWrapper: React.FunctionComponent<INavWrap> = ({ content, navbar, home }) => {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    const contentWrapper = document.getElementById('content-wrapper');
    if (mode && contentWrapper) {
      contentWrapper?.classList.add('light');
      contentWrapper?.classList.remove('dark');
    } else {
      contentWrapper?.classList.add('dark');
      contentWrapper?.classList.remove('light');
    }
  }, [mode]);

  return (
    <>
      {navbar && <NavBar home={home} mode={mode} setMode={setMode} />}
      <div
        id="content-wrapper"
        className={home ? 'coming-soon content-wrapper' : 'content-wrapper'}
      >
        {content}
      </div>
    </>
  );
};

export default NavWrapper;
