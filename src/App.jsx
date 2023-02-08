import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Service from './component/Service';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App
