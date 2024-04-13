import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Data");
    return () => {
      console.log(`Data ${count}`);
    };
  }, [count]);

  return (
    <>
      <div className="flex flex-col w-[100vw] justify-center items-center gap-2 border-2 py-4">
        <div className="flex font-bold">Showdata</div>
        <button
          className="flex justify-center  items-center border-2 w-[4rem] py-1 rounded-[15px]"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
        <button
          onClick={() => {
            console.log(count);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default Effect;
