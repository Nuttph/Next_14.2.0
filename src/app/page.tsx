"use client";
import styles from "./page.module.css";
import Fade1 from "./components/Fade1";
import Fade2 from "./components/Fade2";
import Fade3 from "./components/Fade3";
import Fade4 from "./components/Fade4";
import Tfetch from "./components/Tfetch";
import Effect from "./components/Effect";
import Tfetch2 from "./components/Tfetch2";
import Program1 from "./components/Program1";
import Todolist from "./components/todolist/Todolist";
import Ref from "./components/Ref";
import TestData1 from "./components/tranferData/TestData1";
import Context from "./components/tranferData/Context";
import ShowData from "./components/fetchData/ShowData";
import Task1 from "./components/task/Task1";
import TuseEffect from "./components/recapEffect/TuseEffect";

export default function Home() {
  return (
    <>
      <div className="">
        <TuseEffect />
        {/* <Task1 />
        <br />
        <ShowData />
        <br />
        <TestData1 />
        <br />
        <Context />
        <Fade1 />
        <br />
        <Fade2 />
        <br />
        <Fade3 />
        <br />
        <Fade4 />
        <br />
        <Tfetch />
        <br />
        <Effect />
        <br />
        <Tfetch2 />
        <br />
        <Program1 />
        <br />
        <Todolist />
        <br />
        <Ref /> */}
      </div>
    </>
  );
}
