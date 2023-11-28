"use client"
import addReview from '@/firebase/firestore/clientReview';
import { useState } from 'react';


const Home = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
        // Your review properties go here, e.g., name, image, review
        name: name,
        image: 'https://example.com/image.jpg',
        review: review,
      };
      
      // Call the addReview function with the reviewData object
      const result = await addReview(reviewData);
      
      // Check the result and handle accordingly
      if (result === 'Review added successfully!') {
        console.log('Review added successfully!');
      } else {
        console.error(result); // This will log the error message
      }
  };

  return (
    <div>
      <h1>Submit a Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Review:
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Home;
