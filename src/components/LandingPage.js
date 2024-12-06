import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(true);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const images = [
    "/foto1.jpeg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg",
    "/foto5.jpeg",
    "/foto6.jpg",
    "/foto7.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCelebration(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setShowModal(true);
    } else {
      alert("Isi dulu doanya, sayangkuu.");
    }
  };

  return (
    <div className="landing-page">
      <h1 style={{ fontSize: "1.7rem", color: "#333" }} className="title">🎉 Happy 21st Birthday My Favorite Person! 🎂</h1>
      <p className="subtitle">Selamat ulang tahun! Semoga bahagia selalu!</p>

      {/* Musik */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className="image-container">
        <img src={images[imageIndex]} alt="Birthday" className="birthday-image" />
      </div>

      <p className="description">
        Haii cantiik, gimana kabarnya? Di hari yang spesial ke 21 tahunmu semoga kamu selalu dalam keadaan bahagia yaa.
        Kalau bisa setiap hari dan setiap saat okee. Aku tidak akan mendoakanmu saat ini, karena aku akan selalu
        melakukannya setiap hari. Tapi, aku akan dan selalu berharap kamu dalam keadaan terbaik kapanpun itu.
        Walaupun sebenarnya setiap saat kamu enggak pernah terlihat buruk sedikitpun hehehe.
      </p>

      <h4 className="section-title">Silakan Langitkan Doa:</h4>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tulis doa di sini....."
        className="message-input"
      ></textarea>
      <br />
      <button onClick={handleSendMessage} className="send-button">
        Kirim Doa
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Doa berhasil dilangitkan! Semoga cepat diijabah 😊.</p>
            <button onClick={() => setShowModal(false)} className="close-button">
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Balon dan Kembang Api */}
      {showCelebration && (
        <div className="celebration-container">
          {/* Balon dengan variasi posisi */}
          {[...Array(5)].map((_, index) => (
            <div className={`balloon balloon-${index + 1}`} key={index}></div>
          ))}
          {/* Kembang api */}
          {[...Array(3)].map((_, index) => (
            <div className={`firework firework-${index + 1}`} key={index}></div>
          ))}
        </div>
      )}

      {/* Tombol Kembali ke Login */}
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Kembali ke Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
