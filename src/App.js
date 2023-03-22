// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
// import {Home} from './components/Home'
import Home from './components/Home'
import {

  BrowserRouter as Router,
  
  Routes , 
  Route, 
  Link
 } from "react-router-dom";
// import { Component } from 'react'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route  exact path="/Home" element={<Home/>}/>

      </Routes>
    </Router>
  
  );
}

export default App;
