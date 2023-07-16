import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Feature = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
    };

    const handleAfterChange = (current) => {
        setCurrentSlide(current);
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    useEffect(() => {
        if (sliderRef.current) {
            setTotalSlides(sliderRef.current.props.children.length);
        }
    }, []);

    var settings = {
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        swipeToSlide: true,
        touchMove: true,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const [slidetoshow, setslidetoshow] = useState(3);
    useEffect(() => {
        if (window.innerWidth < 900) {
            setslidetoshow(1);
        }
        else if (window.innerWidth < 1400) {
            setslidetoshow(2);
        }
        else {
            setslidetoshow(3);
        }
    }, []);

    const featureData = [
        <div className="flex justify-center">
            <div className="relative max-w-full h-[301px] xsm2:h-[424px] xsm2:w-fit xsm2:max-w-[413px] bg-[#ffffff] shadow-[_10px_10px_40px_rgba(_171,_181,_217,_0.08)] p-4 xsm:p-6 md:p-8 rounded-[20px] mt-[95px]">
                <div className="border-[1px] border-b-[#1a1a1a] mx-[80px] self-center mt-[70px] sm:mt-[95px] "></div>
                <div className="flex justify-center absolute w-full left-0 top-[-60px] sm:top-[-72px]">
                    <img
                        className="w-[100px] h-[100px] sm:w-[138px] sm:h-[126px] md:w-[202px] md:h-[184px]"
                        src={require("../assets/feature/cube.png")}
                        alt="cube"
                    />
                </div>
                <p className="font-[700] text-base xsm:text-lg xsm2:text-xl md:text-[24px] leading-[38px] mt-8">
                    Fully customizable
                </p>
                <p className="font-[500] text-xs xsm:text-[14px] xsm2:text-base leading-[20px] md:text-[18px] md:leading-[28px] mt-[12px]">
                    Customize your quicksite to match your brand's colors & style. Add
                    your logo, images, and other custom elements to make your
                    quicksite stand out.
                </p>
            </div>
        </div>
        ,
        <div className="flex justify-center">
            <div className="relative max-w-full h-[301px] xsm2:h-[424px] xsm2:w-fit xsm2:max-w-[413px] bg-[#ffffff] shadow-[_10px_10px_40px_rgba(_171,_181,_217,_0.08)] p-4 xsm:p-6 md:p-8 rounded-[20px] mt-[95px]">
                <div className="border-[1px] border-b-[#1a1a1a] mx-[80px] self-center mt-[70px] sm:mt-[95px] "></div>
                <div className="flex justify-center absolute w-full left-0 top-[-60px] sm:top-[-72px]">
                    <img
                        className="w-[100px] h-[100px] sm:w-[103px] sm:h-[126px] md:w-[151px] md:h-[184px]"
                        src={require("../assets/feature/homechain.png")}
                        alt="cube"
                    />
                </div>
                <p className="font-[700] text-base xsm:text-lg xsm2:text-xl md:text-[24px] leading-[38px] mt-8">
                    Tapop link store
                </p>
                <p className="font-[500] text-xs xsm:text-[14px] xsm2:text-base leading-[20px] md:text-[18px] md:leading-[28px] mt-[12px]">
                    With TAPOP link store, users can quickly add multiple links to
                    their quicksites without the need to individually search and add each link
                    themselves.
                </p>
            </div>
        </div>
        ,
        <div className="flex justify-center">
            <div className="relative max-w-full h-[301px] xsm2:h-[424px] xsm2:w-fit xsm2:max-w-[413px] bg-[#ffffff] shadow-[_10px_10px_40px_rgba(_171,_181,_217,_0.08)] p-4 xsm:p-6 md:p-8 rounded-[20px] mt-[95px]">
                <div className="border-[1px] border-b-[#1a1a1a] mx-[80px] self-center mt-[70px] sm:mt-[95px] "></div>
                <div className="flex justify-center absolute w-full left-0 top-[-60px] sm:top-[-72px]">
                    <img
                        className="w-[100px] h-[100px] sm:w-[138px] sm:h-[126px] md:w-[202px] md:h-[184px]"
                        src={require("../assets/feature/homerocket.png")}
                        alt="cube"
                    />
                </div>
                <p className="font-[700] text-base xsm:text-lg xsm2:text-xl md:text-[24px] leading-[38px] mt-8">
                    360° Instant sharing
                </p>
                <p className="font-[500] text-xs xsm:text-[14px] xsm2:text-base leading-[20px] md:text-[18px] md:leading-[28px] mt-[12px]">
                    Share your quicksite instantly with anyone, anywhere using
                    TAPOP's NFC devices, QR codes, or profile links.
                </p>
            </div>
        </div>
    ]
    return (
        <div className='w-full relative'>
            <Slider {...settings} ref={sliderRef}>
                {featureData.map((item, index) => (
                    <div key={index} className='w-full h-full'>
                        {item}
                    </div>
                ))}
            </Slider>

            {currentSlide !== 0 && <div className="absolute mt-10 w-8 sm:w-12 h-8 sm:h-12 rounded-full -left-3 xsm:left-0 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white flex justify-center items-center hover:cursor-pointer active:scale-95 duration-150" style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)' }} onClick={previousSlide}>
                <HiChevronLeft />
            </div>}

            {currentSlide !== totalSlides - slidetoshow && <div className="absolute mt-10 w-8 sm:w-12 h-8 sm:h-12 rounded-full -right-3 xsm:right-0 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white flex justify-center items-center hover:cursor-pointer active:scale-95 duration-150" style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)' }} onClick={nextSlide}>
                <HiChevronRight />
            </div>}
        </div>
    )
}

export default Feature;
