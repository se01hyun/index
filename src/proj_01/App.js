import Viewer from "./Viewer"
import Controller from "./Controller"
import { useState, useEffect } from "react";
import "./App.css"
import Even from './Even'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  function handleSetCount(value){
    setCount(count+value);
  };
  function handleOnchange(e) {
    setText(e.target.value)
  }

  useEffect(()=>{
    console.log("count 업데이트", count, text);
    return (()=>{
      console.log("count 제거")
    })
  }, [count]);

  return (
    <div className = "App">
      <h1>Counter App</h1>
      <div>
        <input value={text} onChange={handleOnchange}/>
        <p>{text}</p>
      </div>
      <div>
        <Viewer count={count}></Viewer>
        {count % 2 === 0 && <Even />}
      </div>
      <div>
        <Controller handleSetCount={handleSetCount}></Controller>
      </div>
    </div>
  )
}
export default App;