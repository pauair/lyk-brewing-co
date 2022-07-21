// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDpqtYSx38UNpjpzgScE8j7AZIUQou77Ok",
  authDomain: "lyk-brewing-co.firebaseapp.com",
  projectId: "lyk-brewing-co",
  storageBucket: "lyk-brewing-co.appspot.com",
  messagingSenderId: "245154058584",
  appId: "1:245154058584:web:e3a26e60c1e949283b952d",
  measurementId: "G-P4KQL49R54"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export async function getAllProducts() {
  const productsCollectionRef = collection(db, "products")
  const docSnapshot = await getDocs(productsCollectionRef)
  const dataProducts = docSnapshot.docs.map(p => {
    const product = {
      ...p.data(),
      id: p.id
    }
    return(product)
  })
  return(dataProducts)
}

export async function getProduct(id) {
  const productsCollectionRef = collection(db, "products")
  const docRef = doc(productsCollectionRef, id)
  const docSnapshot = await getDoc(docRef)
  return docSnapshot.data()
}