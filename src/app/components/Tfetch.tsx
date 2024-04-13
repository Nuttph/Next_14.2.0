import React from "react";

const Tfetch = () => {
  async function Show() {
    const response = await fetch("https://reqres.in/api/users/2");
    const rawInfomation = await response.json();
    const rawData = rawInfomation.data;
    const name = rawData.first_name;
    console.log(name);
    const showName = document.getElementById("name") as Element;
    showName.innerHTML = name;
  }

  return (
    <>
      <div>
        <div>Showdata</div>
        <button onClick={Show}>Click</button>
        <div id="name"></div>
      </div>
    </>
  );
};

export default Tfetch;
