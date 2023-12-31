// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpqtYSx38UNpjpzgScE8j7AZIUQou77Ok",
  authDomain: "lyk-brewing-co.firebaseapp.com",
  projectId: "lyk-brewing-co",
  storageBucket: "lyk-brewing-co.appspot.com",
  messagingSenderId: "245154058584",
  appId: "1:245154058584:web:71969d7cb7b5313d3b952d",
  measurementId: "G-ZEC8XMF1GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export async function getAllProducts() {
    const productsCollectionRef = collection(db, "products")
    const docSnapshot = await getDocs(productsCollectionRef)
    const dataProducts = docSnapshot.docs.map(p => {
        const product = {
            ...p.data(),
            id: p.id
        }
        return (product)
    })
    return (dataProducts)
}

export async function getProduct(id) {
    const productsCollectionRef = collection(db, "products")
    const docRef = doc(productsCollectionRef, id)
    const docSnapshot = await getDoc(docRef)
    return docSnapshot.data()
}
