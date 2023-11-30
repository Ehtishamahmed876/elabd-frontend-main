"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgramSlider from "@/components/homecomponents/Slider";
import addReview, { getReviews } from "@/firebase/firestore/clientReview";
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)




  
  const [selectedImage, setSelectedImage] = useState(null);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');

  const [imageUrl, setImageUrl] = useState(null);

  const handleModel = () => {
         setOpenModal(false)
         setSelectedImage(null)
         setRating(0)
         setName('')
         setCompanyName('')
         setDesignation('')
         setReview('')
         setEmail('')
  }
  
  const handleImageChange = (e) => {
    // Handle image selection logic here
    const file = e.target.files[0];
    // You can use FileReader API to display the selected image
    // For simplicity, let's just set the selected image for now
    setSelectedImage(file);
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // Check if all required fields are filled
    if (!selectedImage || !name || !rating || !review || !email ) {
      toast.error('Please fill in all required fields.');
      setLoading(false)
      return;
    }
  
    const storage = getStorage();
    const storageRef = ref(storage, `reviews/${selectedImage.name}`);
    await uploadBytes(storageRef, selectedImage);
    const imageUrl = await getDownloadURL(storageRef);


    const currentDateTime = new Date();
    // Prepare the review data object
    const reviewData = {
      name: name,
      companyName: companyName,
      designation: designation,
      imageUrl: imageUrl,
      rating: rating,
      review: review,
      email:email,
      status:"pending",
      timestamp: currentDateTime.toISOString(),
    };
  
    // Call the addReview function with the reviewData object
    const result = await addReview(reviewData);
  
    // Check the result and handle accordingly
    if (result === 'Review added successfully!') {
      toast.success("Review added sucessfully")
      setLoading(false)
      handleModel()
    } else {
      toast.error(result);
      setLoading(false) // This will log the error message
    }
  };
  


  const filledStars = 2; // Number of filled stars
  const totalStars = 5; // Total number of stars

  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= filledStars) {
      // Render a filled star
      stars.push(
        <span key={i} className="text-yellow-500 text-4xl">
          &#9733;
        </span>
      );
    } else {
      // Render an outline star
      stars.push(
        <span key={i} className="text-gray-500 text-4xl">
          &#9733;
        </span>
      );
    }
  }
  return (
    <div className="m-3 overflow-hidden">
      <div className="bg-white ">
      <ToastContainer />

        <Navbar />
        <div className="flex flex-col  mx-4 md:mx-16 justify-center items-center py-5 md:py-20">
          <h1 className="md:text-[40px]  2xl:text-[48px] md:leading-[5rem]  font-[600] text-xl ">
            <span className="font-[700] mr-4 text-[#21AC77] text-xl md:text-[48px] 2xl:text-[64px]">
              Words
            </span>
            of Praise from Our
          </h1>
          <h2 className=" font-[700] text-[#21AC77] text-xl md:text-[48px] 2xl:text-[64px]">
            Valued Customers
          </h2>
          <p className=" text-sm text-center  md:text-xl lg:w-[40%]  font-[400] text-[#8b8b8b] mt-5 md:mt-10">
          At Elabd Technologies, our success is measured by the satisfaction of our customers. Here are some heartfelt words from those who have entrusted us with their digital journey:
          </p>
          <div className="flex flex-col mt-5 md:mt-10 md:flex-row relative md:right-14 justify-start  items-center">
            <div className="flex relative ">
              <img
                src="/images/person1.png"
                alt="person1 img"
                className="w-16 h-16  relative md:left-12 "
              />
              <img
                src="/images/person2.png"
                alt="person2 img"
                className="w-16 h-16  relative md:left-6"
              />
              <img
                src="/images/person3.png"
                alt="person3 img"
                className="w-16 h-16  relative "
              />
            </div>

            <div>
              <p className="md:text-2xl  xl:text-[32px]  font-[500] text-black">
                Trusted by 1000+ People
              </p>
            </div>
            

          </div>
          <div className="mt-5">
             <Button className=" bg-gradient-to-r  from-[#35D373] to-[#1C9E76] text-xl text-white" onClick={() => setOpenModal(true)}>Add Your Review</Button>
             </div>
        </div>

        <div className=" relative ">

        <svg
                    className="hidden md:block absolute -bottom-12  left-0 w-full h-28 z-10 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#DCFFDB"
                       
                        d="M0 30 q150 -60 300 0 t300 0 t300 0 t300 0 t300 0 v70 H0 v-60 Z"
                    ></path>
                </svg>
          <div className="m-4 md:m-16 pb-8 md:pb-20">
            <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-[700]">Reviews</h1>
            <p>Discover what our clients have to say about Elabd Technologies </p>
          </div>
        </div>
      </div>
      <div className="m-4 md:m-16  my-8 md:my-32">
        <ProgramSlider  />
      </div>
      <Footer />


      <Modal show={openModal} onClose={() => handleModel()}>
        <Modal.Header>ADD Your Review</Modal.Header>
        <Modal.Body>
        <div className="space-y-6  flex flex-col  justify-center items-center">
          {/* Image Selection */}
          <div className="relative w-28 h-28 rounded-full border bg-[#DCFFDB] cursor-pointer">
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-full rounded-full required object-cover"
              />
            )}
            <label htmlFor="imageInput" className="absolute inset-0 flex items-center justify-center">
              {selectedImage ? (
                <span className="text-black text-xl w-6 h-6 flex justify-center items-center bg-[#DCFFDB] absolute bottom-0 right-3  rounded-full cursor-pointer">
                  +
                </span>
              ) : (
                <span className="text-black text-4xl cursor-pointer">+</span>
              )}
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Star Rating */}
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={`cursor-pointer text-4xl ${
                  star <= rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Review Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
              <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-2 border required border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full p-2 border required border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 border required border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
        <Button disabled={loading} className=" bg-gradient-to-r  from-[#35D373] to-[#1C9E76]" onClick={handleSubmit}>{loading?"loading":"Submit"}</Button>
        <ToastContainer />


        </div>
 
        </Modal.Body>
     
          
          
      
      </Modal>
    </div>
  );
};

export default Reviews;
