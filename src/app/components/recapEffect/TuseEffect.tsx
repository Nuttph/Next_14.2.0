import React, { useEffect, useState } from "react";
const [dataLoaded, setDataLoaded] = useState(false);
const [count, setCount] = useState<number>(0);
const [num, setNum] = useState<number>(0);
const TuseEffect = () => {
  useEffect(() => {
    const log = () => {
      console.log("Hello");
    };
    if (!dataLoaded) {
      log();
    }
  }, [dataLoaded]);
  return (
    <>
      <div>useEffect</div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount((pre) => pre + 1);
          }}
          className="border-2 px-2 py-1 rounded-[12px]"
        >
          Click
        </button>
        <div>{num}</div>
        <div>
          <button
            onClick={() => {
              setNum((pre) => pre + 1);
            }}
            className="border-2 px-2 py-1 rounded-[12px]"
          >
            Click
          </button>
        </div>
      </div>
    </>
  );
};

export default TuseEffect;
