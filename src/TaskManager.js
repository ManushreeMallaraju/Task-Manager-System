import './taskManager.css'
import Task from './Task'
import AddTask from './AddTask'
import { useState, useEffect } from 'react'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from './firebase'

function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)

  // creating a state that will hold all the tasks received from the database.
  const [tasks, setTasks] = useState([])

  /** Adding a useEffect which will call the onSnapshot function when the component is mounted. */
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      //returns a querySnapshot that was mapped and stored in the task state
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])



  return (
    <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        <button
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='taskManager__tasks'>
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title}
              description={task.data.description}
            />
          ))}
        </div>
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      }

    </div>
  )
}

export default TaskManager
