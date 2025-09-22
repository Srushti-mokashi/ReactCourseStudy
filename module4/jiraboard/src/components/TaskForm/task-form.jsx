import './task-form.css';
import Tag from "../Tag/Tag";
import { useState } from "react";
const TaskForm = () => {

   const [taskData,setTaskData] = useState({
      task: "",
      status: "Ready for Development",
      tags:[]
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setTaskData((prev) => {
         return { ...prev, [name]: value };
      });
   };
   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(taskData);
   }

   const selectedTag=(tag)=> { 
         if(taskData.tags.some((item) => item === tag)){
           const filterTags = taskData.tags.filter((item) => item !== tag);
           setTaskData((prev) => {
            return { ...prev, tags: filterTags };
           });
      }else{
         setTaskData((prev) => {
            return { ...prev, tags: [...prev.tags, tag] };
         });
      }
    };
     console.log(taskData);
  
   // const [task, setTask] = useState("");
   // const [status, setStatus] = useState("");
   // const handleTask = (e) => {
   //    setTask(e.target.value);
   // };
   // const handleStatusChange = (e) => {
   //    setStatus(e.target.value);
   // };
   // console.log(task, status);
  return (
    
       <header className="app_header">
          <form onSubmit={handleSubmit}>
            <input
            type="text" 
            name="task"
            className="task_input" 
            placeholder="Enter task details"
            onChange={handleTask}
         />
         <div className="task_form_bottom">
         <div>
           <Tag tagName="DEV" selectedTag={selectedTag}/>
            <Tag tagName="QA" selectedTag={selectedTag}/>
            <Tag tagName="Product Owner" selectedTag={selectedTag}/>
            </div>
         
         <div>
         <select className="task_status" name="status" onChange={handleStatusChange}>
            <option value="Ready for Development">Ready for Development</option>
            <option value="In Progress">In Progress</option>
            <option value="Ready for test">Ready for test</option>
            <option value="Closed">Closed</option>
         </select>
         <button type="submit" className="task_submit">+ Add</button>
         </div>
         </div>
        </form>
       </header>
    
  );
};

export default TaskForm;
