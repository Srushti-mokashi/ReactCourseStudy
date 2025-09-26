import React from 'react';
import "./task-column.css";
import TaskCard from '../TaskCard/TaskCard';
import DropArea from '../DropArea/DropArea';
const TaskColumn = ({ title, tasks, status, icon, handleDelete }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
         <img src={props.icon} alt="" className='task_column_icon'></img>
         {title}
       
        </h2>
        <DropArea/>
        {tasks.map((task, index) => task.status === status &&
        <React.Fragment key={index}>
        <TaskCard key={index} title={task.task} tags={task.tags}
         handleDelete={handleDelete} index={index}
         setActiveCard={setActiveCard}
         />
         <DropArea/>
         </React.Fragment>
          )}
        
      </section>
    </div>
  );
};

export default TaskColumn;
