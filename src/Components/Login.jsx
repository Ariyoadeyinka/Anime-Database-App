import styles from "../Css/Login.module.css";
import backgroundImage from '../Assets/LoginImg.jpg';

export default function Login() {
  return (
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
            <input type="email" placeholder="Email" className={styles.loginUsername}/>
            <input type="password" name="" id="" placeholder="Password"  className={styles.loginPass}/>
            <button className={styles.loginButton}>Log In</button>
          </form>
          <a href="" className={styles.forgotPass}>Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
