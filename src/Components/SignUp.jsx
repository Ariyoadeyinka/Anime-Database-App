import { Link } from "react-router-dom";
import styles from "../Css/Login.module.css";
import backgroundImage from '../Assets/LoginImg.jpg';
import { useRef } from "react";
import { useAuth } from '../context/AuthContext';
import { useState } from "react";
import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";  

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/"); 
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
       <div className={styles.headerText}><h1>Sign Up</h1></div>
      <div className={styles.container}>
      <div className={styles.loginDiv}>
        <div className={styles.imageContainer}>
          <img src={backgroundImage} alt="" />
          <div className={styles.imageOverlay}>
           <div>
              <h1 className="text-center">🍥Welcome🍥</h1>
              <p className="text-center">Already have an account?</p>
              <Link to="/login"><button className={styles.signUpLink}>Log In</button></Link>
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
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className={styles.loginPass} 
              ref={passwordConfirmRef} 
              required
            />
            <button className={styles.loginButton} disabled={loading}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
