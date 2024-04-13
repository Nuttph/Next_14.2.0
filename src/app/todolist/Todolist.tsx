import React, { useState } from "react";

const Todolist = () => {
  const [text, setText] = useState([]);
  const [error, setError] = useState(false);
  const newText = () => {
    const inText: string | null = (
      document.getElementById("list") as HTMLInputElement
    )?.value;
    if (inText == "") {
      setError(true);
    } else {
      setText([inText, ...text]);
      (document.getElementById("list") as HTMLInputElement).value = "";
    }
  };
  const remove = (index: number) => {
    const clear = text.filter((item, indexCheck) => indexCheck != index);
    setText(clear);
  };

  return (
    <>
      <main className="flex flex-col items-center">
        <nav className="flex w-full justify-between font-bold px-2 py-4">
          <div>Name : Nuttaphon</div>
          <div>Todolist</div>
          <div></div>
        </nav>
        <div className="flex flex-col">
          <div className="flex gap-[0.5rem] flex-row">
            <input
              onChange={() => {
                setError(false);
              }}
              className={`${
                error ? "border-red-400 bg-red-300 font-bold text-red-700" : ""
              } 
              border-2 px-2 w-[70vw] py-2 rounded-[15px] bg-yellow-100 duration-[300ms] focus:bg-green-200`}
              placeholder={`${
                error ? "Please type a message." : "Type a message"
              }`}
              type="text"
              name=""
              id="list"
              maxLength={60}
            />
            <button
              onClick={newText}
              className="btn1 border-2 px-4 py-2 rounded-[15px]
              bg-green-400 text-black font-[500] hover:bg-purple-400 duration-150"
            >
              Add
            </button>
          </div>
        </div>
        <div
          id="my-list"
          className="flex flex-col border-2 border-gray-700 my-2 w-[95vw]"
        >
          {text.map((items, index) => {
            const time = new Date();
            const day = time.getDate();
            const month = time.getMonth();
            const year = time.getFullYear();
            const timeText = `${day}/${month}/${year}`;

            // const hour = time.getHours();
            // const min = time.getMinutes();
            // const sec = time.getSeconds();
            // const clockText = `${hour}:${min}:${sec}`;
            return (
              <>
                <div
                  key={index}
                  className={`${
                    index % 2 == 0 ? "bg-gray-200" : "bg-white"
                  } px-2 py-2`}
                >
                  <div className="flex justify-between">
                    <div>
                      <div>{timeText} :</div>
                      <div>{items}</div>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          remove(index);
                        }}
                        className="bg-purple-800 text-white px-2 py-[2pxs] rounded-[8px]"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Todolist;
