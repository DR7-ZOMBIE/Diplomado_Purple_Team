// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import Docentes from './components/Docentes';
import Modules from './components/Modulos';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docentes" element={<Docentes />} />
        <Route path="/modules" element={<Modules />} />
      </Routes>

      <Footer />
    </>
  );
}
