import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExpenseApp from './ExpenseApp'
import Splash from './Splash'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='app' element={<ExpenseApp />} />
      </Routes>
    </div>
  )
}

export default App
