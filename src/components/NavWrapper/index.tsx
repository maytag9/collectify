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
    {content}
  </>)
};

export default NavWrapper;