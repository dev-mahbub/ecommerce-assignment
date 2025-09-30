'use client';
import highLightProductsData from '@/data/handpicked-highlight-data';
import Image from 'next/image';
import React from 'react';

const HandpickedHighlights = () => {
  

  return (
    <div className="py-[110px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold text-headingPrimary mb-5">Handpicked Highlights</h2>
          <p className="mt-2 text-body text-base mx-auto">
            There are many variations of available but the majority have <br /> suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highLightProductsData.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden transition-shadow duration-300">
              <div className="relative">
                <div >
                    <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full lg:w-[283px] h-full object-cover"
                    />
                </div>
                {product.hot && (
                  <span className="absolute top-3 left-3 bg-white text-danger text-xs font-semibold px-3 py-1.5 rounded-full">
                    Hot Item
                  </span>
                )}
                {product.favorite && (
                  <button className="absolute top-3 right-3 h-[45px] w-[45px] text-headingPrimary bg-white rounded-full text-[18px]">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                )}
              </div>

              <div className="pt-4">
                <div className='flex justify-between gap-6'>
                    <div>
                        <h3 className="font-semibold text-headingPrimary text-[16px] mt-2">{product.name}</h3>
                    </div>
                    <p className=" text-headingPrimary font-semibold mb-0">{product.price}</p>
                </div>
                <p className="text-sm text-body mt-1 font-medium">{product.description}</p>

                <button className="bg-white hover:bg-primary border border-border hover:border-primary text-body hover:text-white mt-4 w-full py-2 px-4 rounded-md flex items-center justify-center space-x-2 text-sm font-medium transition-colors">
                  <i className="fa-regular fa-cart-shopping mr-2"></i>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandpickedHighlights;