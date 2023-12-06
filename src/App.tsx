import './App.css';
import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import MenuRouter from './components/menu/MenuRouter';
import Headbook from './components/crud/HeadBook';

function App() {
  let [ curTask, setCurTask ] = useState('HEADBOOK');
  const tasks = [
    { taskName: 'MENUROUTER', solving: <MenuRouter key={'MENUROUTER'} /> },
    { taskName: 'HEADBOOK', solving: <Headbook key={'HEADBOOK'} /> },
    // { taskName: 'AUTHENTICATION', solving: <Authentication key={'AUTHENTICATION'} /> }
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App
