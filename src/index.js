import React from "react";
import { render } from "react-dom";
import Sdata from "./Sdata";
import readData from "./readData";
import Card from "./Cards";
import Tabulars from "./Tabulars";
require("./styles.css");
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ACTION ITEMS</h1>
      <Tabulars>
        <div label="TO-DO">
          <div style={{ textAlign: "center" }}>
            <div onClick={()=>{console.log(Sdata[0].id+" Completed")}}><Card title={Sdata[0].title} content={Sdata[0].content} time={Sdata[0].time}/></div>
            <div onClick={()=>{console.log(Sdata[1].id+" Completed")}}><Card title={Sdata[1].title} content={Sdata[1].content} time={Sdata[1].time}/></div>
            <div onClick={()=>{console.log(Sdata[2].id+" Completed")}}><Card title={Sdata[2].title} content={Sdata[2].content} time={Sdata[2].time}/></div>
            <div onClick={()=>{console.log(Sdata[3].id+" Completed")}}><Card title={Sdata[3].title} content={Sdata[3].content} time={Sdata[3].time}/></div>
          </div>
        </div>
        <div label="TO-READ">
          <div style={{ textAlign: "center" }}>
            <Card image={readData[0].image} content={readData[0].content}/>
            <Card image={readData[1].image} content={readData[1].content}/>
            <Card image={readData[2].image} content={readData[2].content}/>
          </div> 
        </div>
      </Tabulars>
    </div>
  );
}
const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
