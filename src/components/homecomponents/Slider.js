"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProgramSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 720 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const reviews = [
    {
      id: 1,
      name: "Jack Sparrow",
      date: "24 April, 2023",
      stars: 5, // Number of stars, you can adjust this based on your data
      experience: "It was great Experience",
      comment: "Elabd Technologies not only met but exceeded our expectations. Their attention to detail and commitment to delivering quality results are truly commendable.",
      image: "/images/review1.png",
    },
    {
      id: 2,
      name: "Jack Sparrow",
      date: "24 April, 2023",
      stars: 5, // Number of stars, you can adjust this based on your data
      experience: "It was great Experience",
      comment: "The seamless collaboration with Elabd Technologies transformed our vision into a digital reality. Their expertise and professionalism set them apart in the industry.",
      image: "/images/review1.png",
    },
    {
      id: 3,
      name: "Jack Sparrow",
      date: "24 April, 2023",
      stars: 4, // Number of stars, you can adjust this based on your data
      experience: "It was great Experience",
      comment: "Working with Elabd Technologies was a pleasure. They not only delivered a top-notch product but also provided valuable insights that added immense value to our project.",
      image: "/images/review1.png",
    },
    {
      id: 4,
      name: "Jack Sparrow",
      date: "24 April, 2023",
      stars: 5, // Number of stars, you can adjust this based on your data
      experience: "It was great Experience",
      comment: "Elabd Technologies understands the pulse of our brand and audience. Their innovative solutions have significantly contributed to our online success.",
      image: "/images/review1.png",
    },
    // Add more review objects as needed
  ];

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute  md:p-3 right-0 mb-10 md:mb-10 rounded-full bg-green-700" onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
    </button>;
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute md:p-3 mb-10 md:mb-10 rounded-full bg-green-700 " onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>

    </button>;
};

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
    //   autoPlay={deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      // containerClass="carousel-container"
    //   removeArrowOnDeviceType={["tablet", "mobile", ""]}
      arrows={true}
      // deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />} 
      // itemClass="carousel-item-padding-40-px"
    >
      
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-3 justify-center items-center">
            <img
              src={review.image}
              alt={review.name}
              className="w-24 md:w-48 rounded-full"
            />
            <h1 className="text-2xl font-[700]">{review.name}</h1>
            <p>{review.date}</p>
            <div className="flex space-x-1">
              {Array.from({ length: review.stars }).map((_, index) => (
                <span key={index} className="text-yellow-400 text-4xl">&#9733;</span>
              ))}
            </div>
            <p className="text-xl font-[600] text-center">{review.experience}</p>
            <p className="text-center text-sm md:text-base">{review.comment}</p>
          </div>
        ))}
      
    </Carousel>
  );
};

export default ProgramSlider;
