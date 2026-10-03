import React, { useEffect, useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskColumn from './components/TaskColumn/TaskColumn';
import closedIcon from './assets/checkmark.png';

const existingTasks = localStorage.getItem('tasks');

const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(existingTasks) || []); 
  
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

  const [activeCard, setActiveCard] = useState([]);

  const onDrop = (status, position) =>{
    console.log(`${activeCard} is goign to place into ${status}
        and at the position ${position}
      `);
    if(activeCard == null || activeCard == undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !==activeCard);
    updatedTasks.splice(position, 0,{
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTasks);
  }; 

  const handleDelete = (taskIndex) =>{
    const newTask =  tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  return (
    <div className='app'>
      <h1 style={{textAlign: 'center', margin:'50px'}}>Jira Board</h1>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn title='Ready for Development' 
              tasks={tasks} 
              status='Ready for Development'
              handleDelete={handleDelete}
              setActiveCard={setActiveCard}
              onDrop={onDrop}
              />
        <TaskColumn title='In Progress' 
          tasks={tasks}
          status='In Progress'
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          />
        <TaskColumn title='Ready for test' 
          tasks={tasks}
          status='Ready for test'
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          />
        <TaskColumn title='Closed' 
          icon={closedIcon}
          tasks={tasks}
          status='Closed'
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          />
      </main>
      
    </div>
  )
}

export default App;