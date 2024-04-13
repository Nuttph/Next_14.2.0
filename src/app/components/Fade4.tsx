import React, { useState } from "react";

function Fade4() {
  const [err, setErr] = useState(false);

  //   const show = () => {
  //     const name = (document.getElementById("name") as HTMLInputElement).value;
  //     const surname = (document.getElementById("surname") as HTMLInputElement)
  //       .value;
  //     if (name != "" && surname != "") {
  //       addData(name, surname);
  //     }
  //   };

  const checkError = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    if (name != "") {
      setErr(false);
    }
  };

  const [text, setText] = useState({
    name: "",
    surname: "",
  });

  const checkData = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const surname = (document.getElementById("surname") as HTMLInputElement)
      .value;
    if (name != "" && surname != "") {
      addData(name, surname);
    } else {
      setErr(true);
    }
  };
  const addData = (name: string, surname: string) => {
    console.log(name + " " + surname);
    const textData = setText({
      name: name,
      surname: surname,
    });
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("surname") as HTMLInputElement).value = "";
  };
  return (
    <>
      <div className="h-[20rem] border-2">
        <div>
          <form action="" className="">
            <div>
              <span className="font-bold">Name</span>
              <input
                type="text"
                className={`${
                  err ? "border-red-500" : "border-blue-500"
                } border-2 ml-2 rounded-[15px] px-5 py-2`}
                placeholder="Your Name"
                onChange={checkError}
                id="name"
              />
            </div>
            <div className="mt-2">
              <span className="font-bold">Surname</span>
              <input
                type="text"
                className={`${
                  err ? "border-red-500" : "border-blue-500"
                } border-2 ml-2 rounded-[15px] px-5 py-2`}
                placeholder="You Surname"
                id="surname"
                onChange={checkError}
              />
            </div>
            <div
              onClick={checkData}
              className="cursor-pointer border-2 w-fit px-6 py-2 rounded-[15px] mt-2"
            >
              Click
            </div>
          </form>
        </div>
        <div>
          {Object.keys(text).map((key: string) => (
            <p key={key}>
              {key}: {text[key as keyof typeof text]}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fade4;
