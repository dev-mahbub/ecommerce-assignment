'use client';

import testimonialsData from '@/data/testimonials-data';
import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
 

  const renderStars = (rating:number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <i className="fa-solid fa-star text-yellow-400"></i>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <i className="fa-solid fa-star-half text-yellow-400"></i>
        );
      } else {
        stars.push(
          <i className="fa-solid fa-star"></i>
        );
      }
    }
    return stars;
  };

  return (
    <div className="py-[110px] bg-cardLight">
      <div className="container">
        {/* Badge & Headings */}
        <div className="mb-10">
          <span className="inline-block bg-primary/10 text-primary text-base font-medium px-3 py-1 rounded-lg mb-4">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-[48px] leading-[50px] font-semibold text-headingPrimary">
            Hear from Our Happy <br /> Customers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-6">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-body text-base mb-8 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center mt-auto">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover mr-2.5"
                />
                <div className='flex flex-col justify-center'>
                  <h4 className="font-semibold text-headingPrimary text-base">{testimonial.name}</h4>
                  <p className="text-sm text-body mb-0">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;