// src/App.js
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('token')));

  // Monitor changes in localStorage to update login state
  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(Boolean(localStorage.getItem('token')));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={loggedIn ? <Navigate to="/tasks" /> : <Login onLogin={() => setLoggedIn(true)} />} />
          <Route path="/register" element={loggedIn ? <Navigate to="/tasks" /> : <Register />} />
          <Route path="/tasks" element={loggedIn ? <Tasks /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
