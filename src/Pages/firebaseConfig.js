import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
 apiKey: "AIzaSyARl3dseWAgSJ_MWNY8XyLdS7mc2lQucx0",
 authDomain: "terpscook.firebaseapp.com",
 projectId: "terpscook",
 storageBucket: "terpscook.firebasestorage.app",
 messagingSenderId: "278939349024",
 appId: "1:278939349024:web:fb6b64518de1d5bb36cc45",
 measurementId: "G-M268SN5QN7"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics };


