import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Menyimpan status login

  return (
    <Routes>
      <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      {/* Proteksi landing page, hanya bisa diakses jika isLoggedIn true */}
      <Route path="/landing" element={isLoggedIn ? <LandingPage /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  );
};

export default App;
