'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ImgTwo from '../../../../../public/assets/images/hero/image2.png';
import ImgThree from '../../../../../public/assets/images/hero/image3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slidesData from '@/data/hero-slider-data';

// import required modules
import { Pagination, Autoplay  } from 'swiper';

const ProductShowcase = () => {
  

  return (
    <div className="bg-gray-50 p-20">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Product Slider */}
          <div className="col-span-12 lg:col-span-8 xxl:col-span-6">
            <div className="hero-slider relative overflow-hidden rounded-2xl h-[544px]">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500, // time between slides (ms)
                  disableOnInteraction: false, // continue autoplay after user interaction
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-full"
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={slide.id}>
                    <div className="bg-dark h-full p-8 lg:p-12 relative rounded-2xl">
                      <div className="flex items-center justify-between h-full">
                        <div className="flex-1 z-10">
                          <div className="mb-4">
                            <span className="text-gray-400 text-sm uppercase tracking-wide">{slide.brand}</span>
                          </div>
                          
                          <h2 className="text-[1.5rem] lg:text-[2rem] font-bold mb-6 text-white">
                            {slide.title}
                          </h2>
                          
                          <p className="text-body mb-12 text-base max-w-md">
                            {slide.description}
                          </p>
                          
                          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Buy Now {slide.price}
                          </button>
                        </div>
                        
                        {/* Product Image */}
                        <div className="flex-1 flex justify-center items-center">
                          <div className="relative w-[306px] h-[314px]">
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              fill
                              className="object-contain"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Side Products */}
          <div className="col-span-12 lg:col-span-4 xxl:col-span-6">
            {/* Xiaomi Smart Security Camera */}
            <div className="bg-cardLight rounded-2xl p-6 shadow-sm h-[262px] mb-6">
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-gray-500 text-sm uppercase tracking-wide">XIAOMI</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-12">
                    Smart Security Home Camera
                  </h3>
                  
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">
                    Shop Now
                  </button>
                </div>
                
                <Image
                      src={ImgTwo}
                      alt="camera"
                      width={130}
                      height={190}
                      className="rounded-md object-cover"
                    />
                
              </div>
            </div>

            {/* Redmi Smart Watch */}
            <div className="bg-cardLight rounded-2xl p-6 shadow-sm h-[262px]">
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-gray-500 text-sm uppercase tracking-wide">REDMI</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Smart Watch
                  </h3>
                  <p className="text-body mb-12">5 lite</p>
                  
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">
                    Shop Now
                  </button>
                </div>
                
                {/* Watch Images */}
                <Image
                   src={ImgThree}
                   alt="watch"
                   width={130}
                   height={150}
                   className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;