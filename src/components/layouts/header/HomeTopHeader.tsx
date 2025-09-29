'use client'
import React, { useState } from 'react';
import { ChevronDown, Search, User, Heart, ShoppingCart } from 'lucide-react';
import UsImg from '../../../../public/assets/images/map/america.svg';
import Image from 'next/image';
import Link from 'next/link';

const HomeTopHeader = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
      const [selectedCurrency, setSelectedCurrency] = useState('USD');
    return (
        <div className='w-full'>
            <div className="bg-gray-900 text-white text-sm">
        <div className="w-full mx-auto px-[100px]">
          <div className="flex items-center justify-between h-[50px]">
            {/* Left side - Language and Currency */}
            <div className="flex items-center space-x-6">
              {/* Language Selector */}
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <div className="w-4 h-4 rounded-full flex items-center justify-center">
                  <i className="fa-light fa-globe"></i>
                </div>
                <span>{selectedLanguage}</span>
                <i className='fa-light fa-chevron-down'></i>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <Image
                   src={UsImg}
                   alt="us flag"
                   width={16}
                   height={16}
                   className="rounded-md object-cover"
                  />
                <span>{selectedCurrency}</span>
                <i className='fa-light fa-chevron-down'></i>
              </div>
            </div>

            {/* Center - Flash Sale */}
            <div className="flex-1 text-center">
              <span className="text-white">Flash Sale Live - 30% Off Everything</span>
            </div>

            {/* Right side - Login/Register */}
            <div className="flex items-center space-x-1">
              <Link href="auth/signin">
                <i className='fa-light fa-user text-[12px] mr-1.5'></i>
                <span>login</span>
              </Link>
              <span>/</span>
              <Link href={"/"}>
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HomeTopHeader;