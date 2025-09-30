import Image from 'next/image';
import React from 'react';
import BannerImgOne from '../../../../../public/assets/images/promo-banner/banner1.png';
import BannerImgTwo from '../../../../../public/assets/images/promo-banner/banner2.png';

const PromoBanner = () => {
  return (
    <div className="p-[16px] lg:p-[44px] bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Image */}
          <div className="min-w-[328px] w-full lg:w-[590px] h-[470px] rounded-xl overflow-hidden shadow-sm">
                <Image
                    src={BannerImgOne}
                    alt="Light blue handbag"
                    className="w-full h-auto object-center"
                />
          </div>

          {/* Center Promo Text */}
          <div className="bg-cardLight rounded-xl flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-[36px] font-semibold text-headingPrimary leading-[50px] mb-4">
              Don’t Miss Out <br /> 50% OFF
            </h2>
            <p className="text-body text-sm md:text-sm max-w-xs mb-8">
              Get 50% Off — Limited Time Only. Refresh your wardrobe with modern essentials.
            </p>
            <button className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Shop now
            </button>
          </div>

          {/* Right Image */}
          <div className="min-w-[328px] w-full lg:w-[590px] h-[470px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src={BannerImgTwo}
              alt="Red crocodile leather bag"
              className="w-full h-auto object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;