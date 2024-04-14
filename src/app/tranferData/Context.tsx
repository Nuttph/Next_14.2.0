import React, { createContext, useState } from "react";
import ContextTest from "./ContextTest";
interface mockData {
  name: string;
  age: number;
}
export const setItem = createContext<mockData>({
  name: "",
  age: 0,
});

const Context = () => {
  const [data, setData] = useState({
    name: "nuttaphon",
    age: 19,
  });
  return (
    <>
      <div>Data:</div>
      <div>
        <setItem.Provider value={data}>
          <ContextTest />
        </setItem.Provider>
      </div>
      <button
        className="border-2 mx-2 my-1"
        onClick={() => {
          setData({ name: "Anonthaphon", age: 18 });
        }}
      >
        Click
      </button>
    </>
  );
};

export default Context;
