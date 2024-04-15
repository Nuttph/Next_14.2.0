import React, { useState } from "react";

interface Box {
  id: string;
  color: string;
}
type BoxColor = {
  id: string;
  color: string;
};
const Task1 = () => {
  const [boxes, setBoxes] = useState<BoxColor[]>([]);
  const [boxClicked, setBoxClicked] = useState<boolean>(false);
  const randomColor = (): string => {
    let color;
    do {
      color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } while (color === "#ffffff");
    return color;
  };

  const boxStyle = "w-[7rem] h-[7rem] cursor-pointer";

  if (!boxClicked) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const newBox: Box = {
          id: `${i}-${j}`,
          color: randomColor(),
        };
        setBoxes((prevBoxes) => [...prevBoxes, newBox]);
      }
    }
    setBoxClicked(true);
  }

  const changeColor = (id: string): void => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        return {
          ...box,
          color: randomColor(),
        };
      }
      return box;
    });
    setBoxes(updatedBoxes);
  };

  return (
    <>
      <div className="flex flex-col cursor-pointer bg-purple-950 h-[100vh] items-center justify-center">
        <div className="border-2 px-[10vw] py-[5vh] bg-purple-700">
          <div className="text-white font-bold mb-[5rem]">
            คลิกที่กล่องเพื่อดูสิ่งต่างๆที่เป็นกล่อง
          </div>
          <div className="flex flex-wrap w-[35rem]">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`${boxStyle} hover:scale-[1.2] duration-[0.2s]`}
                style={{ backgroundColor: box.color }}
                onClick={() => changeColor(box.id)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task1;
