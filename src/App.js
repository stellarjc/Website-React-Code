import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Cosmology from './screens/Cosmology';
import Rocketry from './screens/Rocketry';
import Tech from './screens/Tech';
import News from './screens/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cos" element={<Cosmology />} />
          <Route path="/roc" element={<Rocketry />} />
          <Route path="/spt" element={<Tech />} />
          <Route path="/spn" element={<News />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
