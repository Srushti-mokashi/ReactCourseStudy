import React, { Suspense, useState } from "react";
import './App.css'


const ChildComponent=React.memo(({ count })=>{
 console.log("Child component is written");
 return <h2>Value is {count}</h2>;
});


// Code Splitting using React.lazy and Dynamic import


const About = React.lazy(()=> import("./Components/About"));
const Contact = React.lazy(()=> import("./Components/Contact"));
function App() {
    console.log("Paraent Component called");
     const [count, setCount] = useState(0);
     const [text, setText] = useState("");
     const [showAbout, setAbout] = useState(false);
      const [showContact, setContact] = useState(false);
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
        <hr></hr>
        <hr></hr>
        <h2>Code Splitting using React.lazy and Dynamic import</h2>
        <button onClick={()=>{
         setAbout(true);
        }}
        >Load About Component
        </button>
         <button onClick={()=>{
         setContact(true);
        }}
        >Load Contact Component
        </button>
        <Suspense fallback={<p>Loading Component..</p>} >
          {showAbout && <About/> }
          {showContact && <Contact/> }
        </Suspense>
    </>
  )
}

export default App;
