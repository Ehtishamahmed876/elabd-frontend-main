"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProgramSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    const data = [
        {
            title: 'Game Development',
            description: "Embark on an exciting adventure with Us' game development. Dive into limitless fun and entertainment.",
            image: "/images/game.png",
        },
        {
            title: 'Social Media Marketing',
            description: "Boost your brand's online presence with Us' social media marketing. We make your brand shine across different platforms.",
            image: "/images/social.png",
        },
        {
            title: 'Content Writing',
            description: "Captivate your audience with Us' content writing services. We use powerful words to tell engaging stories.",
            image: "/images/content.png",
        },
        // Add more items as needed
    ];

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={deviceType !== "mobile" ? true : false}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
           
            // deviceType={deviceType}
            dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        >
                {data.map((item, index) => (
            <div key={index} className='flex justify-center items-center'>

                    <div  className="flex flex-col justify-center items-center w-[35rem] z-20 gap-4 md:gap-10 lg:py-24  bg-gradient-to-r p-10 rounded-3xl from-[#35D373] to-[#1C9E76]">
                        <div className="flex flex-col justify-center gap-3 items-center md:gap-16">
                            <h1 className="text-white text-xl md:text-[32px]  font-[700]">{item.title}</h1>
                            <div className="bg-white p-5 lg:p-10 rounded-xl">
                                <img src={item.image} className='w-10 h-10 lg:w-13 lg:h-13' />
                            </div>
                            <p className="text-white md:text-[16px] text-center xl:text-[20px] font-[400] md:w-80 lg:w-[27rem]">{item.description}</p>
                        </div>
                        <div className="bg-white text-center md:w-40 rounded-3xl p-3">
                            <button className="font-[500] md:text-[16px] text-black">Read More</button>
                        </div>
                    </div>
            </div>

                ))}

        </Carousel>
    )
}

export default ProgramSlider