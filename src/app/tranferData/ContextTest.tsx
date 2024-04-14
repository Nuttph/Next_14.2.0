import React, { useContext } from "react";
import { setItem } from "./Context";

const ContextTest = () => {
  const realData = useContext(setItem);
  return (
    <>
      <div>
        <div>{realData.name}</div>
        <div>{realData.age}</div>
      </div>
    </>
  );
};

export default ContextTest;
