import React from 'react'


import './App.css'
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import Features from './components/Features'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'


function App() {
  

  return (
   <BrowserRouter>
      <Navbar/>
  
      
     
   <div   >
    <Routes>
      <Route path='/'  element={<>
          <Home />
          <Features />
        </>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/faq' element={<FAQ/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
