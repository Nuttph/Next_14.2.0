import React, { useEffect, useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
const ShowData = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function GetData() {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const rawInfo = await response.json();
      const rawData = rawInfo.data;
      setUserData(rawData);
      setDataLoaded(true);
    }

    if (!dataLoaded) {
      GetData();
    }
  }, [dataLoaded]);

  return (
    <>
      <div>Data:</div>
      <div className="getPath">
        {userData.map((item: any) => (
          <p
            key={item.id}
            className={`${
              item.id % 2 == 0 ? "bg-purple-200" : "bg-pink-200"
            } py-2 flex items-center`}
          >
            <img
              src={item.avatar}
              alt=""
              className="rounded-[12px]
              drop-shadow-2xl"
            />
            <div className="flex flex-col mx-4 gap-2 font-[500]">
              <div className="flex flex-row items-center gap-2">
                <MdAccountCircle className="h-[2rem] w-[2rem]" />
                {item.id} : {item.first_name} {item.last_name}
              </div>
              <div className="flex flex-row items-center">
                <FaMailBulk className="h-[2rem] w-[2rem] mr-2" /> : {item.email}
              </div>
            </div>
          </p>
        ))}
      </div>
    </>
  );
};

export default ShowData;
