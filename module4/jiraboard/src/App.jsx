import React from 'react';
import './app.css';
import TaskForm from './components/TaskForm/task-form';
import TaskColumn from './components/TaskColumn/task-column';
import closedIcon from './assets/checked.png';
const App = () => {
  const [tasks, setTasks] =  useState([]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }
  
  return (
    <div className="app">
    <h1 style={{ textAlign: "center", margin: "50px"}}>Jira Board</h1>
     <TaskForm setTasks={setTasks}/>
     <main className="app_main">
      <TaskColumn title="Ready for Development" tasks={tasks} status="Ready for Development" handleDelete={handleDelete} />
      <TaskColumn  title="In Progress" tasks={tasks} status="In Progress" handleDelete={handleDelete}/>
      <TaskColumn  title="Ready for test" tasks={tasks} status="Ready for test" handleDelete={handleDelete}/>
      <TaskColumn  title="closed" icon={closedIcon} tasks={tasks} status="Closed" handleDelete={handleDelete}/>
     </main>
    </div>
  )
}

export default App
