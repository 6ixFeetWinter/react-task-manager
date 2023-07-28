import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRKWtCdEruG67PynOYBQSynvx2xTs-nyk",
  authDomain: "task-manager-f1dc6.firebaseapp.com",
  projectId: "task-manager-f1dc6",
  storageBucket: "task-manager-f1dc6.appspot.com",
  messagingSenderId: "214060149747",
  appId: "1:214060149747:web:ffa93e672db157ca130086",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
