import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Client = () => {
  const reviewsData = [
 
    {
      name: "Emily Davis",
      image: "/images/client1.png",
      review:
        "I'm impressed with Elabd Technologies' innovative approach. They seamlessly turned my ideas into a remarkable reality. Thank you for the outstanding service!",
    },
    {
      name: "William Brown",
      image: "/images/client2.png",
      review:
        "Elabd Technologies goes above and beyond! Their team's expertise and professionalism are unmatched. I am delighted with the final results.",
    },
    {
      name: "Olivia Wilson",
      image: "/images/client3.png",
      review:
        "Elabd Technologies's attention to detail and commitment to quality are commendable. I'm incredibly satisfied with the service they provided.",
    },
    {
      name: "Daniel Lee",
      image: "/images/client1.png",
      review:
        "I highly recommend Elabd Technologies. Their innovative solutions and top-tier service surpassed my expectations. Excellent job!",
    },
    {
      name: "Sophia Miller",
      image: "/images/client2.png",
      review:
        "Elabd Technologies understands client needs exceptionally well. Their professionalism and dedication are truly praiseworthy. Thank you for a wonderful experience!",
    },
    {
      name: "Liam Garcia",
      image: "/images/client3.png",
      review:
        "Choosing Elabd Technologies was a game-changer for my project. Their support and expertise made the entire process smooth and efficient.",
    },
    {
      name: "Ava Martinez",
      image: "/images/client1.png",
      review:
        "Elabd Technologies delivered exactly what I envisioned for my website. Their attention to detail and creativity are remarkable. Thank you for an outstanding job!",
    },
    {
      name: "Noah Thompson",
      image: "/images/client2.png",
      review:
        "I'm extremely pleased with Elabd Technologies' professionalism and expertise. Their commitment to delivering top-quality solutions is truly commendable.",
    },
    {
      name: "Isabella Harris",
      image: "/images/client3.png",
      review:
        "Elabd Technologies provided exceptional service. Their team's dedication to customer satisfaction is evident in every step. Highly recommended!",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="font-inter overflow-hidden">
        <div className="bg-white m-3 font-inter">
          <Navbar />

          <div className="flex p-4 lg:px-16 items-center">
            <div className="flex-1">
              <h1 className="font-[700] text-2xl md:leading-[3rem] 2xl:leading-[5rem] md:text-[48px] 2xl:text-[80px] text-[#21AC77]">
                  Elabd Technologies  
                <span className="2xl:text-[64px] mx-2 2xl:mx-6  md:text-[40px] md:leading-[3rem] 2xl:leading-[5rem] text-lg font-[700] text-black">
                    With Thousands of Satisfied 
                </span>
                Customers
              </h1>
              <p className="md:text-lg  2xl:text-xl font-[400] text-[#8b8b8b] ">
                Experience the excellence that sets Elabd Technologies apart.
                Our commitment to innovation, quality, and customer satisfaction
                makes us your ideal digital partner. Join us today and discover
                the difference that fuels our success story.
              </p>
            </div>
            <div className="flex-1  hidden lg:block">
              <img
                src="/images/client-side-img.png"
                alt="side image"
                className=" 2xl:h-[50rem] "
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex 2xl:gap-20 gap-5 m-3 2xl:px-16  relative bottom-28">
            <div className="bg-white flex flex-col items-center shadow-lg gap-5  xl:p-8 rounded-lg group hover:bg-gradient-to-r from-[#35D373]  to-[#1C9E76]">
              <img src="/images/client1.png" alt="client" />
              <h1 className="text-xl font-[700] text-black group-hover:text-white">
                John Wick
              </h1>

              <p className="text-[48px] text-[#35D373] group-hover:text-white">
                “
              </p>
              <p className="text-[16px] text-black font-[400] w-[20rem]  text-center group-hover:text-white">
              The team at Elabd Technologies exceeded our expectations. Their attention to detail and commitment to delivering high-quality results were evident throughout the entire process. We highly recommend their services.
              </p>
            </div>

            <div className="bg-white flex flex-col relative bottom-8 items-center shadow-lg gap-5 xl:p-8 rounded-lg group hover:bg-gradient-to-r from-[#35D373]  to-[#1C9E76]">
              <img src="/images/client2.png" alt="client" />
              <h1 className="text-xl font-[700] text-black group-hover:text-white">
              Alice Johnson
              </h1>

              <p className="text-[48px] text-[#35D373] group-hover:text-white">
                “
              </p>
              <p className="text-[16px] text-black font-[400] w-[20rem] text-center group-hover:text-white">
              Working with Elabd Technologies was a fantastic experience. Their professionalism and expertise shine through in every interaction. I'm extremely satisfied with their services.
              </p>
            </div>

            <div className="bg-white flex flex-col items-center shadow-lg gap-5 xl:p-8 rounded-lg group hover:bg-gradient-to-r from-[#35D373]  to-[#1C9E76]">
              <img src="/images/client3.png" alt="client" />
              <h1 className="text-xl font-[700] text-black group-hover:text-white">
              Michael Smith
              </h1>

              <p className="text-[48px] text-[#35D373] group-hover:text-white">
                “
              </p>
              <p className="text-[16px] text-black font-[400] w-[20rem]  text-center group-hover:text-white">
              Elabd Technologies provided exceptional support and guidance. Their dedication to delivering top-notch solutions is truly commendable. I am thrilled with the outcome!
              </p>
            </div>
          </div>
        </div>

        <div className="m-3 bg-white lg:p-16 p-4">
          <h1 className="text-black font-[700] text-[36px]">Customers list</h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10 mt-10">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center shadow-lg gap-5 p-8 rounded-lg group hover:bg-gradient-to-r from-[#35D373] to-[#1C9E76]"
              >
                <img src={review.image} alt={`client${index}`} />
                <h1 className="text-xl font-[700] text-black group-hover:text-white">
                  {review.name}
                </h1>
                <p className="text-[48px] text-[#35D373] group-hover:text-white">
                  “
                </p>
                <p className="text-[16px] text-black font-[400] lg:w-[20rem]  text-center group-hover:text-white">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Client;
