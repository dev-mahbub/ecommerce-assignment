import categoryData from '@/data/shop-category-data';
import Image from 'next/image';
import React from 'react';

const ShopByCategory = () => {
 

  return (
    <div className='py-[110px] bg-cardLight'>
        <div className="container ">
        <div className="mb-14">
          <h2 className="text-[48px] font-semibold text-headingPrimary mb-5">Shop by Category</h2>
          <p className="mt-2 text-body text-base">
            Explore our curated selection of products across premium categories, from <br></br> everyday essentials to exclusive limited collections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categoryData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-2 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-headingPrimary text-[16px] my-2">{category.name}</h3>
              <p className="text-base text-body mt-1 font-medium">{category.count}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default ShopByCategory;