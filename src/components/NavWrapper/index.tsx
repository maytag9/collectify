import React, { ReactNode, useState } from "react";
import NavBar from "../../components/NavBar";
interface INavWrap{
  content: ReactNode;
  navbar: boolean;
}
const NavWrapper: React.FunctionComponent<INavWrap> =
  ({content, navbar}) => {
  const [mode, setMode] = useState(true);

  return (<>
    {navbar && <NavBar mode={mode} setMode={setMode}/>}
    <div className="content-wrapper">{content}</div>
  </>)
};

export default NavWrapper;