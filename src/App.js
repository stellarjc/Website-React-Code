import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Cosmology from './screens/Cosmology';
import Rocketry from './screens/Rocketry';
import Tech from './screens/Tech';
import Team from './screens/Team';
import News from './screens/News';
import Navbar from './components/Navbar';
import Contact from './screens/Contact';
import Read from './screens/Read';
import NotFound from './screens/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmology" element={<Cosmology />} />
          <Route path="/rocketry" element={<Rocketry />} />
          <Route path="/technology" element={<Tech />} />
          <Route path="/blog" element={<News />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogpost/:id" element={<Read />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
