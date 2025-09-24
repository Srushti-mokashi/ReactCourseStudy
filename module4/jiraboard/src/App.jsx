import React from 'react';
import './app.css';
import TaskForm from './components/TaskForm/task-form';
import TaskColumn from './components/TaskColumn/task-column';
import closedIcon from './assets/checked.png';
const App = () => {
  const [tasks, setTasks] =  useState([]);
  
  return (
    <div className="app">
    <h1 style={{ textAlign: "center", margin: "50px"}}>Jira Board</h1>
     <TaskForm setTasks={setTasks}/>
     <main className="app_main">
      <TaskColumn title="Ready for Development" tasks={tasks} status="Ready for Development" />
      <TaskColumn  title="In Progress" tasks={tasks} status="In Progress" />
      <TaskColumn  title="Ready for test" tasks={tasks} status="Ready for test" />
      <TaskColumn  title="closed" icon={closedIcon} tasks={tasks} status="Closed"/>
     </main>
    </div>
  )
}

export default App
