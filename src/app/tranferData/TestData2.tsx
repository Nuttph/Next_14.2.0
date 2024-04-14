import React from "react";

const TestData2 = (props: { name: string; lastname: string; age: number }) => {
  return (
    <>
      <div>
        NAME : {props.name} {props.lastname}
      </div>
      <div>AGE : {props.age}</div>
    </>
  );
};

export default TestData2;
