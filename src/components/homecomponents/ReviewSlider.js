"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewSlider = ({ imgsrc, heading, para, subheading }) => {
  const filledStars = 2; // Number of filled stars
  const totalStars = 5; // Total number of stars

  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= filledStars) {
      // Render a filled star
      stars.push(
        <span key={i} className="text-yellow-500 text-2xl">
          &#9733;
        </span>
      );
    } else {
      // Render an outline star
      stars.push(
        <span key={i} className="text-gray-500 text-2xl">
          &#9733;
        </span>
      );
    }
  }

  const reviewsData = [
    {
      name: "John Wick",
      role: "condimentum",
      imageUrl: "/images/review1.png",
      quote:
        "The team at Elabd Technologies exceeded our expectations. Their attention to detail and commitment to delivering high-quality results were evident throughout the entire process. We highly recommend their services.",
      stars: [
        /* Stars data */
      ],
    },
    {
      name: "Alex",
      role: "condimentum",
      imageUrl: "/images/review1.png",
      quote:
        "The team at Elabd Technologies exceeded our expectations. Their attention to detail and commitment to delivering high-quality results were evident throughout the entire process. We highly recommend their services.",
      stars: [
        /* Stars data */
      ],
    },
    // Add more reviews as needed
  ];
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showArrows={true}
    >
      {reviewsData.map((review, index) => (
        <div
          key={index}
          className="md:w-[100%] flex flex-col lg:flex-row items-center justify-center overflow-hidden"
        >
          <div className="md:w-[100%] flex flex-col lg:flex-row justify-center items-center bg-[#DCFFDB] p-5 rounded-lg overflow-hidden">
            <div className="flex gap-2 w-[70%] flex-col lg:flex-row justify-center md:w-full p-5 items-center ">
              <div className="">
                <img
                  src={review.imageUrl}
                  className="bg-contain w-28"
                  alt={`Review ${index + 1}`}
                />
              </div>
              <div className="flex md:w-[100%] flex-col justify-center gap-3 md:gap-0 items-center">
                <p className="lg:text-[64px] text-[30px] font-[700] text-black">
                  ''
                </p>
                <p className="lg:text-xl font-[500] text-black text-sm w-72 md:w-96 lg:w-full">
                  {review.quote}
                </p>
                <div className="flex space-x-1">{stars}</div>
                <h1 className="text-black font-[600] text-[24px]">
                  {review.name}
                </h1>
                <p className="text-[#AAAAAA] font-[400] text-[16px]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default ReviewSlider;
