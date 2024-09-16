import styles from "../Css/Login.module.css";
import backgroundImage from '../Assets/LoginImg.jpg';
import { useRef } from "react";
import { useAuth } from '../context/AuthContext';
import { useState } from "react";
import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";  // Replace useHistory with useNavigate

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Replaced useHistory with useNavigate

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");  // Replaced history.push with navigate
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginDiv}>
        <div className={styles.imageContainer}>
          <img src={backgroundImage} alt="" />
          <div className={styles.imageOverlay}>
            <div>
              <h1 className="text-center">🍥Welcome🍥</h1>
              <p className="text-center">To The Biggest Anime Database On The Internet</p>
            </div>
          </div>
        </div>
        <div className={styles.loginForm}>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.loginUsername} 
              ref={emailRef} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.loginPass} 
              ref={passwordRef} 
            />
            <button 
              className={styles.loginButton} 
              disabled={loading}
            >
              Log In
            </button>
          </form>
          <a href="" className={styles.forgotPass}>Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
