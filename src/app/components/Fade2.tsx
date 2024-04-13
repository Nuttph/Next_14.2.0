import React, { useState } from "react";

function Fade2() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <div className="border-2 py-3">
        <div className="mx-5 flex flex-col gap-2">
          <div
            className={`${
              status ? "bg-green-500" : "bg-red-500"
            } border-2 w-[11rem] px-4 py-1 flex items-center justify-center rounded-[10px]`}
          >
            Status is : <span className="">{status ? "True" : "False"}</span>
          </div>
          <button
            className="w-fit border-2 px-5 py-1 rounded-[10px] bg-yellow-400 border-yellow-700"
            onClick={() => {
              status ? setStatus(false) : setStatus(true);
            }}
          >
            Switch
          </button>
        </div>
      </div>
    </>
  );
}

export default Fade2;
