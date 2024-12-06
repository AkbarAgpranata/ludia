import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import file CSS untuk styling

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Ludia Saqina" && password === "07desember2003") {
      setIsLoggedIn(true);
      navigate("/landing");
    } else {
      setError(
        "Sayangkuu, passwordnya salah. Namamu pakai spasi dan awal huruf besar ya. Passwordnya tanggal lahirmu tanpa spasi huruf kecil semua."
      );
    }
  };

  return (
    <div className="login-page"> 
    <div className="login-container">
      <div className="login-box">
        <h2>Silakan Masuk Tuan Putri</h2>
        <input
          type="text"
          placeholder="Nama Panjang Kamu"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Tanggal Lahir Kamu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
