import { useState } from "react";

const CreateTodo = () => {
  
  const [count, setCount] = useState(0);
  const isDisabled = false;
  const handleClick = () =>{
      setCount(count + 1);
    };
    return (
    <>
      <h1 style={{ color: "black"}}>{count}</h1>
      <button 
       disabled={isDisabled} 
       value="Add Task button"  
       onClick={handleClick}
     >
       
         Add Task</button>
    </>
  );
};

export default CreateTodo;
