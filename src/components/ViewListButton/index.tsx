import React from "react";
import { Button } from 'antd';
import { useNavigate } from "react-router";

const ViewListButton = () => {
  const navigate = useNavigate();

  return (
      <Button
        className="btn-primary btn-right"
        onClick={() => navigate("/collections")}
        size="small"
      >
        My Collections
      </Button>
  )
};

export default ViewListButton;