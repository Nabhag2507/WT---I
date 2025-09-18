import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentsPage from './studentsPage'
import StudentDetails from './StudentDetails'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<StudentsPage/>}/>
            <Route path='/student' element={<StudentsPage/>}/>
            <Route path='/student/add' element={<AddStudent/>}/>
            <Route path='/students/:id' element={<StudentDetails/>}/>
            <Route path='/students/edit/:id' element={<EditStudent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
