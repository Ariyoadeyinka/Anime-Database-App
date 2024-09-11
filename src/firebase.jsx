import firebase from  'firebase/compat/app' 
import 'firebase/compat/auth' 

const app = firebase.initializeApp({
    apiKey: "AIzaSyBzuiPO3BTEGu1RFG8u9Im40ef4ClwicmE",
    authDomain: "animedatabase-b424c.firebaseapp.com",
    projectId: "animedatabase-b424c",
    storageBucket: "animedatabase-b424c.appspot.com",
    messagingSenderId: "1040977718013",
    appId: "1:1040977718013:web:91776c52a9a002fc3eac94"
})

export const auth = app.auth()
export default app