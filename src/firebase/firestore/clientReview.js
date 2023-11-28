import { getFirestore,  addDoc, collection } from "firebase/firestore";

import firebase_app from "../config";

const db = getFirestore(firebase_app);

export default async function addReview(data) {
  const collectionName = 'reviews';

  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, data);
    return 'Review added successfully!';
  } catch (error) {
    console.error('Error adding review to collection:', error);
    return 'Error adding review to collection.';
  }
}
