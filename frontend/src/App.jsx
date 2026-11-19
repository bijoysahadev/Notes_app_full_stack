import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './Pages/Homepage'
import CreatePage from './Pages/CreatePage'
import NoteDetail from './Pages/NoteDetail'
import toast from 'react-hot-toast'
import {Toaster} from 'react-hot-toast'
import { useEffect } from 'react'
import { useState } from 'react'
const App = () => {

  return (
    <div data-theme="forest">
        <Toaster/>
     
   
      <Routes>
        <Route path='/'  element={<Homepage/>}/>
        <Route path='/create'  element={<CreatePage/>}/>
        <Route path='/note/:id'  element={<NoteDetail/>}/>
      
      </Routes>

    </div>
  )
}

export default App