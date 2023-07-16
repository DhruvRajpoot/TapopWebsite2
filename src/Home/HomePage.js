import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import PrimaryButton3 from "../Components/PrimaryButton3";
import { HiChevronDown, HiChevronLeft, HiChevronRight, HiChevronUp } from "react-icons/hi2";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import Feature from "./Feature";
import InfiniteSlider from "./InfiniteSlider";

export default function HomePage() {
  const [faq1, setfaq1] = useState(false);
  const [faq2, setfaq2] = useState(false);
  const [faq3, setfaq3] = useState(false);
  const username = '';

  // for feature 2
  const webFeatureData = [
    <div className="min-w-[200vw] flex md:flex-col md:min-w-[100vw]">
      <div className="min-w-[100vw] flex flex-col md:flex-row items-center">
        <div className="bg-[#F54040] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
          <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature1.png")} alt="connections" />
        </div>
        <div className="flex flex-col justify-center items-start min-w-full sm:min-w-[50%] h-[296px] p-5 md:p-8 lg:p-10 2xl:p-20">
          <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
            Expand your network
          </p>
          <p className="font-[500] text-[14px] leading-[20px] sm:text-[24px] sm:leading-[38px] mb-[24px] sm:mb-[40px]">
            Connect with your potential customers to grow your business.
          </p>
          {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
        </div>
      </div>
      <div className="min-w-[100vw] flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col justify-center items-start min-w-full md:min-w-[50%] h-[296px] p-5 md:p-8 lg:p-10 2xl:p-20">
          <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
            Hassle-free appointment scheduling
          </p>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-5">
              <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
              <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Simple appointment scheduling based on your availability for the week.</p>
            </div>
            <div className="flex gap-5 mb-6 lg:mb-10">
              <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
              <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Manage your appointments from our simple dashboard.</p>
            </div>
          </div>
          {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
        </div>
        <div className="bg-[#FECA00] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
          <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature2.png")} alt="connections" />
        </div>
      </div>
    </div>
    ,
    <div className="min-w-[200vw] flex md:flex-col md:min-w-[100vw]">
      <div className="min-w-[100vw] flex flex-col md:flex-row items-center">
        <div className="bg-[#9747FF] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
          <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature3.png")} alt="connections" />
        </div>
        <div className="flex flex-col justify-center items-start min-w-full sm:min-w-[50%] h-[296px] p-5 md:p-8 lg:p-10 2xl:p-20">
          <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
            Showcase and sell your products & services
          </p>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-5">
              <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
              <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Display your service offerings and get more clients.</p>
            </div>
            <div className="flex gap-5 mb-6 lg:mb-10">
              <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
              <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Sell your products to grow your business.</p>
            </div>
          </div>
          {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
        </div>
      </div>
      <div className="min-w-[100vw] flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col justify-center items-start min-w-full h-[296px] sm:min-w-[50%] p-5 md:p-8 lg:p-10 2xl:p-20">
          <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
            Monitor your performance
          </p>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-5">
              <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
              <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Promote your business and reach the right audience.</p>
            </div>
            <div className="flex gap-5 mb-6 lg:mb-10">
              <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
              <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Analyze your profile analytics by country, top performing links, and many other factors.</p>
            </div>
          </div>
          {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
        </div>
        <div className="bg-[#544341] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
          <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature4.png")} alt="connections" />
        </div>
      </div>
    </div>
  ]

  const mobileFeatureData = [
    <div className="min-w-[100vw] flex flex-col md:flex-row items-center">
      <div className="bg-[#F54040] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
        <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature1.png")} alt="connections" />
      </div>
      <div className="flex flex-col justify-center items-start min-w-full sm:min-w-[50%] h-[296px] p-5 md:p-8 lg:p-10 2xl:p-20">
        <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
          Expand your network
        </p>
        <p className="font-[500] text-[14px] leading-[20px] sm:text-[24px] sm:leading-[38px] mb-[24px] sm:mb-[40px]">
          Connect with your potential customers to grow your business.
        </p>
        {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
      </div>
    </div>,
    <div className="min-w-[100vw] flex flex-col-reverse md:flex-row items-center">
      <div className="flex flex-col justify-center items-start min-w-full md:min-w-[50%] h-[296px] p-5 md:p-8 lg:p-10 2xl:p-20">
        <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
          Hassle-free appointment scheduling
        </p>
        <div className="flex flex-col gap-5 lg:gap-6">
          <div className="flex gap-5">
            <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
            <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Simple appointment scheduling based on your availability for the week.</p>
          </div>
          <div className="flex gap-5 mb-6 lg:mb-10">
            <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
            <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Manage your appointments from our simple dashboard.</p>
          </div>
        </div>
        {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
      </div>
      <div className="bg-[#FECA00] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
        <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature2.png")} alt="connections" />
      </div>
    </div>
    ,
    <div className="min-w-[100vw] flex flex-col md:flex-row items-center">
      <div className="bg-[#9747FF] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
        <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature3.png")} alt="connections" />
      </div>
      <div className="flex flex-col justify-center items-start min-w-full sm:min-w-[50%] h-[296px] p-5 md:p-8 lg:p-10 2xl:p-20">
        <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
          Showcase and sell your products & services
        </p>
        <div className="flex flex-col gap-5 lg:gap-6">
          <div className="flex gap-5">
            <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
            <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Display your service offerings and get more clients.</p>
          </div>
          <div className="flex gap-5 mb-6 lg:mb-10">
            <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
            <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Sell your products to grow your business.</p>
          </div>
        </div>
        {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
      </div>
    </div>,
    <div className="min-w-[100vw] flex flex-col-reverse md:flex-row items-center">
      <div className="flex flex-col justify-center items-start min-w-full h-[296px] sm:min-w-[50%] p-5 md:p-8 lg:p-10 2xl:p-20">
        <p className="font-[900] text-lg xsm:text-[24px] leading-[32px] lg:text-3xl xl:text-[40px] xl:leading-[64px] mb-[16px] sm:mb-5 lg:mb-[28px]">
          Monitor your performance
        </p>
        <div className="flex flex-col gap-5 lg:gap-6">
          <div className="flex gap-5">
            <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
            <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Promote your business and reach the right audience.</p>
          </div>
          <div className="flex gap-5 mb-6 lg:mb-10">
            <div className="w-2 h-1.5 rounded-full bg-black mt-4" />
            <p className="font-medium text-xs xsm:text-sm sm:text-lg lg:text-2xl">Analyze your profile analytics by country, top performing links, and many other factors.</p>
          </div>
        </div>
        {username === '' && <PrimaryButton3 width="fit-content" height={'56px'} text="Get started for free " color="#1a1a1a" />}
      </div>
      <div className="bg-[#544341] min-w-full md:min-w-[50%] h-[296px] xsm2:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[592px] flex flex-col justify-end items-center">
        <img className="w-full sm:w-3/5 md:w-full h-full md:h-[90%] xl:h-full" src={require("../assets/feature/feature4.png")} alt="connections" />
      </div>
    </div>
  ];

  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <div className="flex flex-col items-center justify-center md:pt-[68px] px-[20px] w-full relative">
        <div className="absolute w-[50px] h-[56px] lg:w-[100px] lg:h-[96px] top-32 sm:top-40 md:top-60 left-10 md:left-[15%] hidden sm:block" style={{ background: 'linear-gradient(221.7deg, #F2B108 11.7%, #F54040 45.9%, #5940F5 74.4%)', filter: "blur(30px)", zIndex: "0" }} />
        <div className="absolute w-[80px] h-[76px] lg:w-[140px] lg:h-[136px] top-16 sm:top-28 md:top-40 right-10 md:right-[15%]" style={{ background: 'linear-gradient(221.7deg, #F2B108 11.7%, #F54040 45.9%, #5940F5 74.4%)', filter: "blur(30px)", zIndex: "0" }} />
        <p className="max-w-[1060px] font-[900] text-2xl leading-8 xsm:text-[30px] xsm:leading-10 sm:text-[36px] md:text-[45px] lg:text-[56px] md:leading-[64px] text-center mt-[36px] sm:mt-[68px] mb-[16px] sm:mb-[36px] text-[#1A1A1A]" style={{ zIndex: "2" }}>Impress your network with <br /> professional online presence</p>
        <p className="max-w-[700px] font-[500] text-[16px] leading-[24px] sm:text-[20px] sm:leading-[32px] md:text-[24px] text-center mb-[28px] sm:mb-[44px] text-[#817C7C]">Get started to stand out from the competition and make a lasting impression with your digital presence.</p>
      </div>

      <div className="flex justify-center gap-1 sm:gap-4 xsm2:px-1">
        <div className="flex flex-col">
          <img src={require('../assets/heroelement/Elements.png')} alt="" className="pb-1 sm:pb-4 w-[103px] h-[135px] xsm2:w-[135px] xsm2:h-[200px] md:w-[237px] md:h-[308px]" />
          <img src={require('../assets/heroelement/Elements (1).png')} alt="" className="w-[103px] h-[62px] xsm2:w-[135px] xsm2:h-[105px] md:w-[237px] md:h-[114px]" />
        </div>
        <div className="flex self-end">
          <img src={require('../assets/heroelement/Elements (2).png')} alt="" className="md:w-[237px] md:h-[308px] hidden xl:block" />
        </div>
        <div className="flex self-end">
          <img src={require('../assets/heroelement/Elements (3).png')} alt="" className="w-[106px] h-[108px] xsm2:w-[150px] xsm2:h-[140px] md:w-[237px] md:h-[202px]" />
        </div>
        <div className="flex flex-col self-end">
          <img src={require('../assets/heroelement/Elements (4).png')} alt="" className="w-[103px] h-[135px] xsm2:w-[135px] xsm2:h-[200px] md:w-[237px] md:h-[308px]" />
          <img src={require('../assets/heroelement/Elements (6).png')} alt="" className="w-[103px] h-[62px] xsm2:w-[135px] xsm2:h-[105px] md:w-[237px] md:h-[114px] lg:hidden pt-4" />
        </div>
        <div className="hidden lg:flex flex-col">
          <img src={require('../assets/heroelement/Elements (5).png')} alt="" className="pb-1 sm:pb-4 md:w-[237px] md:h-[308px]" />
          <img src={require('../assets/heroelement/Elements (6).png')} alt="" className="md:w-[237px] md:h-[114px]" />
        </div>
      </div>

      <div className="flex flex-col mt-[90px] sm:mt-[150px] px-5 xl:px-10 2xl:px-20 w-full ">
        <div className="flex items-center justify-between md:mb-6">
          <div className="font-[900] text-2xl leading-8 sm:text-4xl lg:text-5xl sm:leading-16">Transform your business <br />
            with our tools</div>
          <div className="hidden md:block">
            {username === '' && <PrimaryButton3 height={'56px'} text="Get started for free" color="#1a1a1a" />}
          </div>
        </div>

        {/* Feature  */}
        <div className="max-w-[100vw] mb-6 md:mb-0 relative">
          <Feature />
        </div>

        <div className="md:hidden w-full max-w-[360px] self-center mt-6">
          {username === '' && <PrimaryButton3 width={"100%"} height={'56px'} text="Get started for free" color="#1a1a1a" />}
        </div>
      </div>

      {/* horizontal infinite scroll animation */}
      <div className="flex flex-col justify-center my-[64px] sm:my-24 lg:my-[124px] w-full">
        <p className="font-[900] text-[24px] leading-[32px] sm:text-4xl lg:text-[48px] lg:leading-[64px] self-center text-center">Trusted & loved by creators</p>
        <InfiniteSlider />
      </div>

      {/* Feature 2 */}
      <div className="w-full hidden md:block">
        <Carousel data={webFeatureData} infinite={true} />
      </div>

      <div className="w-full md:hidden">
        <Carousel data={mobileFeatureData} infinite={true} />
      </div>


      <div className="flex flex-col justify-center items-center bg-[#1a1a1a] p-[20px] md:py-[88px] mt-[64px] sm:mt-[124px] relative">
        <div className="absolute top-10 sm:top-32 lg:top-60 right-10 sm:right-32 lg:right-60 w-20 h-20 md:w-40 md:h-40 rounded-full" style={{ background: 'linear-gradient(222deg, #F2B108 0%, #F54040 46.88%, #5940F5 85.94%)', filter: 'blur(50px)' }}></div>
        <div className="absolute bottom-16 md:bottom-32 left-1/2 -translate-x-1/2 w-20 h-20 md:w-40 md:h-40 rounded-full z-10" style={{ background: 'linear-gradient(222deg, #F2B108 0%, #F54040 46.88%, #5940F5 85.94%)', filter: 'blur(50px)' }}></div>
        <p className="font-[900] text-[24px] mt-4 leading-[32px] sm:text-[32px] md:leading-[40px] lg:text-[48px] lg:leading-[64px] text-white text-center">Tap to Share, Connect, and Grow</p>
        <p className="font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[30px] lg:text-[24px] lg:leading-[38px] text-center my-[40px] text-white md:mx-[50px] lg:mx-[180px] z-30">Make an impression: Share your profile seamlessly with our tappable cards.
          Choose from our extensive selection of card designs to enhance your business and streamline your networking.
          Buy Tapop card</p>
        <PrimaryButton3 text="Buy Tapop card" />
        <img className="h-[234px] md:h-[422px] z-20" src={require("../assets/phone and credit cards.png")} alt="phone" />
      </div>

      <div className="flex flex-col md:flex-row items-center py-16 xl:py-40 px-5 xl:px-20 w-full">
        <div className="w-4/5 md:w-1/2 md:h-[400px] lg:h-[475px] xl:h-[576px]">
          <img src={require('../assets/testimonial.png')} alt="" className="w-full h-full" />
        </div>
        <div className="md:w-1/2">
          <p className="font-[500] text-[14px] sm:text-[18px] leading-[20px] text-[#817C7C]">
            Testimonials
          </p>
          <p className="font-[600] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] xl:text-[24px] xl:leading-[38px] text-[#1a1a1a] mt-[32px] mb-[20px] sm:my-[36px]">
            "Looked at our past email marketing efforts, helped boil down the
            focus, and provided the SEO keywords that can be targeted to market
            to relevant clients. Super helpful mentor always. Do book a call
            with him, he blows everything right off the bat!"
          </p>
          <p className="font-[800] text-[18px] leading-[24px] text-[#1a1a1a]">
            John Doe
          </p>
          <p className="font-[400] text-[18px] leading-[24px] text-[#1a1a1a]">
            Content creator
          </p>
          <div className="flex gap-3 sm:gap-6 md:gap-[54px] items-center mt-[40px]">
            <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-white flex justify-center items-center hover:cursor-pointer active:scale-95 duration-150" style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)' }}>
              <HiChevronLeft />
            </div>
            <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-white flex justify-center items-center hover:cursor-pointer active:scale-95 duration-150" style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)' }}>
              <HiChevronRight />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full px-3 xsm:px-[20px]">
        <p className="font-[900] text-[24px] leading-[32px] sm:text-[48px] sm:leading-[64px] text-center text-[#1a1a1a]">Frequently asked questions</p>
        <div className="w-full sm:max-w-[750px] mt-6 xsm:mt-[52px] sm:mt-[60px] font-[700] text-[16px] leading-[24px] sm:text-[24px] sm:leading-[32px]">
          <div className="px-3 py-5 xsm:p-[20px] sm:pb-[36px] border-b-[1px] border-[#1a1a1a] sm:mt-[42px]">
            <div
              onClick={() => setfaq1(!faq1)}
              className="flex cursor-pointer items-center justify-between sm:px-[36px]"
            >
              <p className="w-[629px]">Can I create a free Tapop Profile?</p>
              {faq1 ? <HiChevronUp /> : <HiChevronDown />}
            </div>
            {faq1 && <div className="mt-[42px] font-[400] px-[20px] sm:px-[36px] text-[16px] leading-[24px]">
              <p>Lorem ipsum dolor sit amet consectetur. Nulla egestas morbi condimentum vel adipiscing quis consectetur odio. Vitae lectus enim eget platea lorem elementum</p>
              <ul className="ml-[20px]">
                <li> magna ultricies vitae. Arcu porttitor dui ornare urna id sit integer.</li>
                <li>A placerat molestie dictum lectus eget lacus duis. Odio at egestas cras</li>
                <li>consectetur convallis aenean nibh nibh mattis. Ut ultrices ultrices dignissim amet in.</li>
              </ul>
            </div>}
          </div>

          <div className="px-3 py-5 xsm:p-[20px] sm:pb-[36px] border-b-[1px] border-[#1a1a1a] sm:mt-[42px]">
            <div
              onClick={() => setfaq2(!faq2)}
              className="flex cursor-pointer items-center justify-between sm:px-[36px]  "
            >
              <p className="w-[629px]">
                What is the difference between free, starter and a pro plan?
              </p>
              {faq2 ? <HiChevronUp /> : <HiChevronDown />}
            </div>
            {faq2 && (
              <div className="mt-[42px] font-[400] px-[20px] sm:px-[36px] text-[16px] leading-[24px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla egestas morbi
                  condimentum vel adipiscing quis consectetur odio. Vitae lectus
                  enim eget platea lorem elementum
                </p>
                <ul className="ml-[20px]">
                  <li>
                    {" "}
                    magna ultricies vitae. Arcu porttitor dui ornare urna id sit
                    integer.
                  </li>
                  <li>
                    A placerat molestie dictum lectus eget lacus duis. Odio at
                    egestas cras
                  </li>
                  <li>
                    consectetur convallis aenean nibh nibh mattis. Ut ultrices
                    ultrices dignissim amet in.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="px-3 py-5 xsm:p-[20px] sm:pb-[36px] border-b-[1px] border-[#1a1a1a] sm:mt-[42px]">
            <div
              onClick={() => setfaq3(!faq3)}
              className="flex cursor-pointer items-center justify-between sm:px-[36px] "
            >
              <p className="w-[629px]">Can I create a free Tapop Profile?</p>
              {faq3 ? <HiChevronUp /> : <HiChevronDown />}
            </div>
            {faq3 && (
              <div className="mt-[42px] font-[400] px-[20px] sm:px-[36px] text-[16px] leading-[24px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla egestas morbi
                  condimentum vel adipiscing quis consectetur odio. Vitae lectus
                  enim eget platea lorem elementum
                </p>
                <ul className="ml-[20px]">
                  <li>
                    {" "}
                    magna ultricies vitae. Arcu porttitor dui ornare urna id sit
                    integer.
                  </li>
                  <li>
                    A placerat molestie dictum lectus eget lacus duis. Odio at
                    egestas cras
                  </li>
                  <li>
                    consectetur convallis aenean nibh nibh mattis. Ut ultrices
                    ultrices dignissim amet in.
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* eslint-disable-next-line */}
      <marquee className="flex items-center  w-full h-[100px] sm:h-[118px] bg-[#1a1a1a] text-white mt-[60px] sm:mt-[140px] overflow-scroll">
        <div className="flex gap-[32px]">
          <p className="font-[500] text-[20px] sm:text-[24px] leading-[36px] min-w-fit">
            Create your online presence with Tapop
          </p>
          <img
            className="h-[36px]"
            src={require("../assets/TapopLogo.png")}
            alt="logo"
          />
          <p className="font-[500] text-[20px] sm:text-[24px]  leading-[36px] min-w-fit">
            Create your online presence with Tapop
          </p>
          <img
            className="h-[36px]"
            src={require("../assets/TapopLogo.png")}
            alt="logo"
          />
          <p className="font-[500] text-[20px] sm:text-[24px]  leading-[36px] min-w-fit">
            Create your online presence with Tapop
          </p>
        </div>
      </marquee>

      <Footer />
    </div>
  );
}
