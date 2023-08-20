import React, { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Register from './components/Register'
import Database from './components/Database'
import Search from './components/Search'
import Verification from './components/Verification'

const App = () => {

  return (

<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
    |<Route index element={<Register/>}/>
    |<Route path='/database' element={<Database/>}/>
    |<Route path='/search' element={<Search/>}/>
    |<Route path='/verification' element={<Verification/>}/>
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App
