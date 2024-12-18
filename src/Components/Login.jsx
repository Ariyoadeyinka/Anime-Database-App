import { Link } from "react-router-dom";
import styles from "../Css/Login.module.css";
import backgroundImage from '../Assets/LoginImg.jpg';
import { useRef } from "react";
import { useAuth } from '../context/AuthContext';
import { useState } from "react";
import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");  
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  async function handleGoogleLogin() {
    try {
      setError('');
      await googleLogin();
      navigate("/");
    } catch (error) {
      setError("Failed to log in with Google");
    }
  }

  return (
    <div>
      <div className={styles.headerText}><h1>LOG IN</h1></div>
      <div className={styles.container}>
      <div className={styles.loginDiv}>
        <div className={styles.imageContainer}>
          <img src={backgroundImage} alt="" />
          <div className={styles.imageOverlay}>
            <div>
              <h1 className="text-center">🍥Welcome🍥</h1>
              <p className="text-center">Don't have an account?</p>
              <Link to="/signup"><button className={styles.signUpLink}>Sign Up</button></Link>
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
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.loginPass} 
              ref={passwordRef} 
              required
            />
            <button 
              className={styles.loginButton} 
              disabled={loading}
            >
              Log In
            </button>
          </form>
          <Link to="/forgot-password">Forgot password?</Link>
        <div className={styles.socialButtons}> 
         <button  className={styles.signIngoogleButton} onClick={handleGoogleLogin}>Log In With <i class="fa-brands fa-google"></i></button>
      
        </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
