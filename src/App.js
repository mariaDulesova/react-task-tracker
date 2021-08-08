import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] =useState(false)

  const[tasks, setTasks]=useState([
    //use State is immutable and can not be changed. You can't push elements inside. But you can use setTasks ([...])
    {
        id:1,
        text: 'Doctors Appontment',
        day: 'Feb 5th at 2.30pm',
        reminder: true
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1.30pm',
        reminder: true
    }
  ])

  //Delete Task
  const deleteTask =(id) => {
    setTasks(tasks.filter(
      (task)=> task.id !==id
    ))
  }

  //Add Task
  const addTask =(task) => {
    const id = Math.floor(Math.random() *10000)+1  
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      task => task.id === id ? { ...task, reminder: !task.reminder} : task
    ))
  }
  
  return (
    <div className="container"> 
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask}/>}
      {(tasks.length>0) ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks for today"}
    </div>
  );
}

export default App;
