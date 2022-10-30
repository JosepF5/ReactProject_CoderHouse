import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  query,
  where,
  collection,
  getDocs,
  Timestamp,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { getDatabase, ref, child, push, update } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "reactproject-coderhouse",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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

export const addPayment = async (name, email, phone, items, total) => {
  console.log(items);
  items.map(async (item) => {
    const docRef = doc(firestoreDB, "productos", item.id);
    console.log(item.stock,",,,,",item.stock-(item.cantidad/item.price))
    await setDoc(docRef, {...item,stock:item.stock-(item.cantidad/item.price)})
  });

  return addDoc(collection(firestoreDB, "compras"), {
    buyer: { name: name, email: email, phone: phone },
    date: Timestamp.fromDate(new Date()),
    items: items,
    total: total,
  });
};

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
