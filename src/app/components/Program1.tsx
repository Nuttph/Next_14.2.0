import React, { useEffect, useState } from "react";

const Program1 = () => {
  const fetchData = "https://reqres.in/api/users?page=1";
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function GetData() {
      console.log("Start fetch");
      const response = await fetch("https://reqres.in/api/users?page=1");
      const rawInfomation = await response.json();
      const rawData = rawInfomation.data;
      const getID = document.getElementById("getID") as Element;

      rawData.forEach((posts: any, index: number) => {
        const showData = document.createElement("div") as Element;
        const showData2 = document.createElement("div") as Element;
        showData.textContent = `Number: ${posts.id}
              Name: ${posts.first_name} ${posts.last_name}
              `;
        showData2.textContent = `Email: ${posts.email}`;
        getID.appendChild(showData);
        getID.appendChild(showData2);
        console.log(showData);
      });
    }
    GetData();
  });

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="border-2 px-2 py-1 rounded-[11px]"
        >
          Click {count}
        </button>
        <div id="getID"></div>
      </div>
    </>
  );
};

export default Program1;
