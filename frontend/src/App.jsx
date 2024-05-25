import { Routes, Route } from 'react-router-dom'
import { Tasks } from './pages/Tasks'
import { TaskDetail } from './pages/TaskDetail'
import AddTaskForm from './pages/AddTask'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Tasks />} />
        <Route path='/task/:id' element={<TaskDetail />} />
        <Route path='/create' element={<AddTaskForm />} />
      </Routes>
    </>
  )
}

export default App
