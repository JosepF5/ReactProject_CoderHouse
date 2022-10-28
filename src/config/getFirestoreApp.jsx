import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  query,
  where,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2P8ZDG6NC_xphhnzPtef2DEzyCXm29eg",
  authDomain: "reactproject-coderhouse.firebaseapp.com",
  projectId: "reactproject-coderhouse",
  storageBucket: "reactproject-coderhouse.appspot.com",
  messagingSenderId: "941493410886",
  appId: "1:941493410886:web:0aabeed02a56ee2641be47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export const getCollections = async (name) => {
  const colecciones = collection(firestoreDB, name);
  const products = await getDocs(colecciones);
  return products.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
};

export const addPayment=async (name,email,phone,items,total)=>{
  return await addDoc(collection(firestoreDB, "compras"), {
    buyer: { name: name, email: email, phone: phone },
    date: Timestamp.fromDate(new Date()),
    items: items,
    total: total,
  });
}

export const getProductosByCategory = async (category) => {
  const colecciones = collection(firestoreDB, "productos");
  const queryItem = query(colecciones, where("category", "==", category));
  const products = await getDocs(queryItem);
  return products.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
};

export const getProductoById = async (id) => {
  const colecciones = collection(firestoreDB, "productos");
  const itemRef = doc(colecciones, id);
  const product = await getDoc(itemRef);
  if (product.data()) {
    return {
      ...product.data(),
      id: product.id,
    };
  }
  return false;
};
