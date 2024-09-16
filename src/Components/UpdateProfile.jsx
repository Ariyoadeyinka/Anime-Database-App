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
  const {currentUser, updatePassword, updateEmail} = useAuth("")
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = []
    setLoading(true);
    setError("")
    if (emailRef.current.value !== currentUser.email){
        promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        navigate("/")
    }).catch(()=>{
        setError("Failed to update account")
    }).finally(() => {
        setLoading(false)
    })

  }

  return (
    <div className={styles.container}>
      <div className={styles.loginDiv}>
        <div className={styles.imageContainer}>
          <img src={backgroundImage} alt="" />
          <div className={styles.imageOverlay}>
            <div>
              <h1 className="text-center">🍥Welcome🍥</h1>
              <p className="text-center">
                To The Biggest Anime Database On The Internet
              </p>
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
              defaultValue={currentUser.email} 
              required
            />
            <input 
              type="password" 
              placeholder="Leave blank to keep the same" 
              className={styles.loginPass} 
              ref={passwordRef} 
              required
            />
            <input 
              type="password" 
              placeholder="Leave blank to keep the same" 
              className={styles.loginPass} 
              ref={passwordConfirmRef} 
              required
            />
            <button className={styles.loginButton} disabled={loading}>Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}
