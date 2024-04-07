
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide ,} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import all image
import image1 from '../assets/icons/Sreemongol.png'
import image2 from '../assets/icons/Sajek.png'

// import required modules
import {Navigation } from 'swiper/modules';
const Home = () => {
    return (
        <div className='flex flex-row-reverse justify-between gap-10 items-center'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                keyboard={{
                    enabled: true,
                  }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div style={{backgroundImage: `url(${image1})`}} className="bg-cover bg-center h-[400px] flex items-end justify-center">
                    <h1 className='text-3xl text-white font-bold pb-4'>Cox’s  Bazar</h1>
                </div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${image2})`}} className="bg-cover bg-center h-[400px] flex items-end justify-center">
                    <h1 className='text-3xl text-white font-bold pb-4'>Cox’s  Bazar</h1>
                </div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${image2})`}} className="bg-cover bg-center h-[400px] flex items-end justify-center">
                    <h1 className='text-3xl text-white font-bold pb-4'>Cox’s  Bazar</h1>
                </div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${image2})`}} className="bg-cover bg-center h-[400px] flex items-end justify-center">
                    <h1 className='text-3xl text-white font-bold pb-4'>Cox’s  Bazar</h1>
                </div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${image2})`}} className="bg-cover bg-center h-[400px] flex items-end justify-center">
                    <h1 className='text-3xl text-white font-bold pb-4'>Cox’s  Bazar</h1>
                </div></SwiperSlide>
              

            </Swiper>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold'>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className='btn bg-yellow-500'>Booking</button>
            </div>
        </div>
    );
};

export default Home;