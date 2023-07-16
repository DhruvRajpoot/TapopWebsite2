import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Carousel = (props) => {
    const data = props.data;
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    useEffect(() => {
        if (props.slideToIndex !== undefined) {
            goToSlide(props.slideToIndex);
        }
    }, [props.slideToIndex]);

    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
        if (props.sendDataToParent !== undefined) {
            props.sendDataToParent(newIndex);
        }
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
        infinite: props.infinite,
        dots: props.dots,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        swipeToSlide: true,
        touchMove: true,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
    };

    return (
        <div className={`${props.width} ${props.height} relative`}>
            <Slider {...settings} ref={sliderRef}>
                {data.map((item, index) => (
                    <div key={index} className='w-full h-full'>
                        {item}
                    </div>
                ))}
            </Slider>

            {(currentSlide !== 0 || props.infinite) && <div className={`absolute w-8 sm:w-12 h-8 sm:h-12 rounded-full ${props.leftPosition} top-1/2 -translate-y-1/2 z-30 bg-white flex justify-center items-center hover:cursor-pointer active:scale-95 duration-75`} style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)' }} onClick={previousSlide}>
                <HiChevronLeft />
            </div>}

            {(currentSlide !== totalSlides - 1 || props.infinite) && <div className={`absolute w-8 sm:w-12 h-8 sm:h-12 rounded-full ${props.rightPosition} top-1/2 -translate-y-1/2 z-30 bg-white flex justify-center items-center hover:cursor-pointer active:scale-95 duration-75`} style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)' }} onClick={nextSlide}>
                <HiChevronRight />
            </div>}
        </div>
    )
}

Carousel.defaultProps = {
    width: 'w-full',
    height: 'h-full',
    infinite: false,
    leftPosition: 'left-2 lg:left-8',
    rightPosition: 'right-2 lg:right-8',
    dots: true,
}

export default Carousel;