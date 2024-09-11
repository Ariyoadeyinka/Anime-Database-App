import styles from "../Css/Login.module.css";
import backgroundImage from '../Assets/LoginImg.jpg';
import { useRef } from "react";
import {useAuth} from '../context/AuthContext'
export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()

    function handleSubmit(e){
         e.preventDefault()

         signup(emailRef.current.value, passwordRef.current.value)
    }
    return(
<div className={styles.container}>
      <div className={styles.loginDiv}>
        <div className={styles.imageContainer}>
          <img src={backgroundImage} alt="" />
          <div className={styles.imageOverlay}>
           <div><h1 className="text-center">🍥Welcome🍥</h1>  <p className="text-center">
            To The biggest Anime Database On The Internet</p>
            </div> 
          </div>
        </div>
        <div className={styles.loginForm}>
          <form action="">
          <input type="email" placeholder="Email" className={styles.loginUsername} ref={emailRef}/>
            <input type="password" name="" id="" placeholder="Password"  className={styles.loginPass} ref={passwordRef}/>
            <input type="password" name="" id="" placeholder="Confirm Password"  className={styles.loginPass} ref={passwordConfirmRef}/>
            <button className={styles.loginButton} onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    );
}