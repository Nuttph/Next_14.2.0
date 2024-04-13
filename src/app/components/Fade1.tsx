import React from "react";
import { useState } from "react";
function Fade1() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col h-[5rem] font-[500] border-2">
      <div className="flex w-[25rem] flex-row justify-center gap-6">
        <div className="flex border-[3px] rounded-[10px] px-10 py-1">
          count:{count}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setCount(count + 1)}
            className="border-[3px] border-green-700 rounded-[10px] px-3 py-1 bg-green-400"
          >
            Plus
          </button>
          <button
            onClick={() => setCount(0)}
            className="border-[3px] border-red-700 bg-red-400 rounded-[10px] px-3 py-1"
          >
            Reset
          </button>
        </div>
      </div>
      <div>useState count</div>
    </div>
  );
}

export default Fade1;
