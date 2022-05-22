import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Patient from './pages/Patient/Patient';
import Doctor from './pages/Doctor/Doctor';
import Manager from './pages/Manager/Manager';
import AuthPage from './pages/Auth/AuthPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [currBalance, setCurrBalance] = useState(null);
  const [role, setRole] = useState(null);
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", paddingBottom: "35rem" }}>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} currUser={currUser} role={role} />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/patient' element={<Patient isLoggedIn={isLoggedIn} role={role} />} />
          <Route path='/doctor' element={<Doctor isLoggedIn={isLoggedIn} role={role} />} />
          <Route path='/manager' element={<Manager isLoggedIn={isLoggedIn} role={role} />} />
          <Route path='/auth' element={<AuthPage setIsLoggedIn={setIsLoggedIn} 
                                                 setCurrUser={setCurrUser} 
                                                 setCurrBalance={setCurrBalance} 
                                                 isLoggedIn={isLoggedIn}
                                                 currUser={currUser}
                                                 currBalance={currBalance}
                                                 role={role}
                                                 setRole={setRole} />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
