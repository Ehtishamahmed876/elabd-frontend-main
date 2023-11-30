import { getFirestore, addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

import firebase_app from "../config";

const db = getFirestore(firebase_app);

export default async function addReview(data) {
  const collectionName = "reviews";

  try {
    // Use the user's email as the ID for the review
    const reviewId = data.email;

    // Create a reference to the 'reviews' collection with the specific document ID
    const reviewDocRef = doc(db, collectionName, reviewId);

    // Set the review document with the user's email as a field
    await setDoc(reviewDocRef, {
      ...data, // Add user's email as a field
    });

    return "Review added successfully!";
  } catch (error) {
    console.error("Error adding review to collection:", error);
    return "Error adding review to collection.";
  }
}

export async function getReviews() {
  const collectionName = "reviews";

  try {
    const collectionRef = collection(db, collectionName);
    const reviewsSnapshot = await getDocs(collectionRef);
    const data = [];
    reviewsSnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error getting reviews:", error);
    return [];
  }
}
