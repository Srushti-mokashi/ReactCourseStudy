
const CreateTodo = () => {
  let task = 5;
  const isDisabled = true;
  // const styles = {
  //   color: "red"
  // };
  const countTask = () => {
    // if (task === 0){
    //   return "No task available";
    // }else{
    //    return `Total Task ${task}`;
    // }
    
    return task === 0 ? "No Task Available .!!" : `Total Task ${task}`;
};

    const handleClick = (e) =>{
      task++;
      console.log("Button Clicked.!!", task);
    
  };
  return (
    <>
      <h1 style={{ color: "red"}} className="btn">{task} </h1>
      <button disabled={isDisabled} value="Add Task button"  onClick={handleClick}>Add Task</button>
    </>
  );
};

export default CreateTodo;
