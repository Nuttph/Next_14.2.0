import React, { useRef } from "react";

const Ref = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const handleFocus = () => {
    if (textRef.current) {
      textRef.current.focus();
      textRef.current.select();
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-col">
          <textarea ref={textRef} className="border-2 w-[50vw] h-[10rem]" />
          <button
            className="flex border-2 w-fit m-2 p-2 rounded-[12px]
          bg-green-400"
            onClick={handleFocus}
          >
            Focus Text
          </button>
        </div>
      </div>
    </>
  );
};

export default Ref;
