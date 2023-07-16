import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Home2 from './screens/Home2';
import Home3 from './screens/Home3';
import Cosmology from './screens/Cosmology';
import Rocketry from './screens/Rocketry';
import Tech from './screens/Tech';
import Team from './screens/Team';
import News from './screens/News';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Contact from './screens/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/h2" element={<Home2 />} />
          <Route path="/h3" element={<Home3 />} />
          <Route path="/Cos" element={<Cosmology />} />
          <Route path="/roc" element={<Rocketry />} />
          <Route path="/spt" element={<Tech />} />
          <Route path="/spn" element={<News />} />
          <Route path="/tem" element={<Team />} />
          <Route path="/con" element={<Contact />} />
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
