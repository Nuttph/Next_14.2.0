// import React, { useState } from "react";

// function Fade3() {
//   const [text, setText] = useState(["Hello"]);

//   const handleClick = () => {
//     const data: string = (document.getElementById("data") as HTMLInputElement)
//       .value;
//     setText([...text, data]);
//     (document.getElementById("data") as HTMLInputElement).value = "";
//   };

//   const handleRemove = (indexToRemove: number) => {
//     const filteredText = text.filter((item, index) => index !== indexToRemove);
//     setText(filteredText);
//   };

//   return (
//     <>
//       <div className="border-2 py-5 px-5">
//         <div>
//           <div>
//             Key:{" "}
//             <input
//               type="text"
//               id="data"
//               placeholder="Key"
//               className="border-2 w-fit"
//               required
//             />
//             <button onClick={handleClick} className="w-fit border-2 px-3 mt-1">
//               ส่ง
//             </button>
//           </div>
//           <div className="bg-blue-200 w-[10rem] px-3 py-1">
//             {text.map((item, index) => (
//               <div className="mt-2" key={index}>
//                 {item}
//                 <div
//                   onClick={() => handleRemove(index)}
//                   className="px-3 py-1 rounded-[10px] cursor-pointer bg-red-500"
//                 >
//                   ลบ
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Fade3;
import React, { useState } from "react";

const Fade3 = () => {
  const [text, setText] = useState(["Nuttaphon", "N"]);
  const checkData = () => {
    const addText: string = (
      document.getElementById("data") as HTMLInputElement
    ).value;
    if (addText != "") {
      handleAdd();
    }
  };
  const handleAdd = () => {
    const addText: string = (
      document.getElementById("data") as HTMLInputElement
    ).value;
    setText([addText, ...text]);
    console.log("add data");
    (document.getElementById("data") as HTMLInputElement).value = "";
  };
  const removeData = (numCheck: number) => {
    const newText = text.filter((item, index) => index != numCheck);
    setText(newText);
    console.log("remove");
  };
  return (
    <>
      <div>
        <div>
          Name : <input type="text" name="" id="data" className="border-2" />
        </div>
        <div>
          <button
            onClick={checkData}
            className="border-2 px-2 py-1 rounded-[10px] mt-2"
          >
            Add Data
          </button>
          <button
            onClick={() => setText([])}
            className="border-2 px-2 py-1 rounded-[10px] mt-2 ml-[1rem]"
          >
            Clear Data
          </button>
        </div>
        <div className="flex justify-center">
          <div className="Show grid grid-cols-2 justify-center items-center h-[20rem]">
            {text.map((t, index) => (
              <div className=" flex gap-2 mx-2 mt-2">
                <div
                  className="flex flex-col items-center h-fit justify-between
                  gap-[1rem] mt-1 bg-gray-200 px-4 py-2 w-[100%]
                  rounded-[15px]
                
              "
                >
                  <div className=" flex justify-center items-center w-[15rem] h-fit">
                    {`Section: ${index + 1}:${t}`}
                  </div>
                  <span>
                    <button
                      onClick={() => {
                        removeData(index);
                      }}
                      className="border-2 px-2 py-1 bg-red-400 border-red-700 rounded-[10px]"
                    >
                      remove
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fade3;
