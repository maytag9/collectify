import React from "react";
import MainWrapper from "../../components/MainWrapper";
import NavWrapper from "../../components/NavWrapper";

const ListView = () => {
  return (<>
    <NavWrapper navbar={true} content={
        <MainWrapper/>
      }
    />
  </>)
};

export default ListView;