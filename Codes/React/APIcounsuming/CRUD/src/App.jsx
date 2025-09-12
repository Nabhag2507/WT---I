import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentsPage from './studentsPage'
import StudentDetails from './StudentDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<StudentsPage/>}/>
            <Route path='/student' element={<StudentsPage/>}/>
            <Route path='/students/:id' element={<StudentDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
