import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import Footer from "./components/Footer";

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
  );
}

export default App;
