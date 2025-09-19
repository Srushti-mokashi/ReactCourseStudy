import './task-form.css';
import Tag from "../Tag/Tag";
const TaskForm = () => {
  return (
    
       <header className="app_header">
          <form>
            <input
            type="text" 
            className="task_input" 
            placeholder="Enter task details"
         />
         <div className="task_form_bottom">
         <div>
           <Tag/>
            <Tag/>
            <Tag/>
            </div>
        
         <div>
         <select className="task_status">
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
