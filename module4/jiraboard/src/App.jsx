import React, { useEffect } from 'react';
import './app.css';
import TaskForm from './components/TaskForm/task-form';
import TaskColumn from './components/TaskColumn/task-column';
import closedIcon from './assets/checked.png';

const existingTasks = localStorage.getItem("tasks");
console.log(existingTasks);

const App = () => {
  const [tasks, setTasks] =  useState(JSON.parse(existingTasks) || []);
  useEffect(()  => {
       localStorage.setItem("tasks", JSON.stringify(tasks) );
  }, [tasks]);

  const  [activeCard, setActiveCard] = useState(null); setActiveCard={setActiveCard}

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }
  
  return (
    <div className="app">
    <h1 style={{ textAlign: "center", margin: "50px"}}>Jira Board</h1>
     <TaskForm setTasks={setTasks}/>
     <main className="app_main">
      <TaskColumn title="Ready for Development" tasks={tasks} status="Ready for Development" handleDelete={handleDelete} setActiveCard={setActiveCard} />
      <TaskColumn  title="In Progress" tasks={tasks} status="In Progress" handleDelete={handleDelete} setActiveCard={setActiveCard}/>
      <TaskColumn  title="Ready for test" tasks={tasks} status="Ready for test" handleDelete={handleDelete} setActiveCard={setActiveCard}/>
      <TaskColumn  title="closed" icon={closedIcon} tasks={tasks} status="Closed" handleDelete={handleDelete} setActiveCard={setActiveCard}/>
     </main>
     <h2>Active card{activeCard}</h2>
    </div>
  )
}

export default App
