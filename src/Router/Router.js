
import React from 'react'
import Home from '../Page/Home';



import {Routes , Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
        <Route path='*' element={<Home/>} />
       
        
    </Routes>
  )
}

export default Router