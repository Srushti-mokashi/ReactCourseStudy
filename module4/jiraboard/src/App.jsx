import React from 'react';
import './app.css';
import TaskForm from './components/TaskForm/task-form';
import TaskColumn from './components/TaskColumn/task-column';
import closedIcon from './assets/checked.png';
const App = () => {
  return (
    <div className="app">
    <h1 style={{ textAlign: "center", margin: "50px"}}>Jira Board</h1>
     <TaskForm/>
     <main className="app_main">
      <TaskColumn title="Ready for Development"/>
      <TaskColumn  title="In Progress"/>
      <TaskColumn  title="Ready for test" />
      <TaskColumn  title="closed" icon={closedIcon}/>
     </main>
    </div>
  )
}

export default App
