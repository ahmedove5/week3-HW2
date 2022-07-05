import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Cards from "./Cards";
import About from "./About";
import Nvbar from "./Nvbar";



export default function Home() {
  return (
    <div>
             <Router>
        <Nvbar/>
        <Header />
        

        <Routes>
          <Route path="/"></Route>
          <Route path="/Cards" element={<Cards/> }></Route>
          <Route path="/About" element={<About/> }></Route>
        </Routes>
      </ Router>
    </div>
  )
}
