import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Patient from './pages/Patient/Patient';
import Doctor from './pages/Doctor/Doctor';
import Manager from './pages/Manager/Manager';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} currUser={currUser} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
