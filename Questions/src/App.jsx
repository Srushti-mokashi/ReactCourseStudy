import React, { useState } from "react";
import './App.css'


const ChildComponent=React.memo(({ count })=>{
 console.log("Child component is written");
 return <h2>Value is {count}</h2>;
});

function App() {
    console.log("Paraent Component called");
     const [count, setCount] = useState(0);
     const [text, setText] = useState("");
  return (
    <>
      <div>
      <ChildComponent count={count}/>
         <button onClick={()=>{
            setCount(count+1);
         }}>
            Click me
         </button>
         <input
          type="text"
          value= {text}
          onChange={(e)=>{
            setText(e.target.value);
         }}/>
        </div>
    </>
  )
}

export default App;
