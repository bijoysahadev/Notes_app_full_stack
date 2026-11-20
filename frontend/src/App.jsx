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
    <div className="realtive h-full w-full">
       <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
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