'use client'
import React from 'react';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import logoImg from '../../../../public/assets/images/logo/logo.png'
import Link from 'next/link';
import Image from 'next/image';

const HomeHeader = () => {

  return (
    <div className="w-full">
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="h-full w-[140px]">
                        <Image
                          className="main-logo"
                          src={logoImg}
                           width={120}
                            height={100}
                          priority
                          alt="logo"
                        />
                      </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-7">
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
                  <span className="font-semibold">Deals of the Week</span>
                  <span className="bg-danger/10 font-semibold text-danger text-xs px-2 py-1 rounded-full">Hot</span>
                </div>
              </div>

              <a href="#" className="text-gray-700 font-semibold hover:text-primary">
                New Arrivals
              </a>

              <a href="#" className="text-gray-700 font-semibold hover:text-primary">
                Men
              </a>

              <a href="#" className="text-gray-700 font-semibold hover:text-primary">
                Women
              </a>

              <a href="#" className="text-gray-700 font-semibold hover:text-primary">
                Kids
              </a>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
                  <span className="font-semibold mr-1">Sale</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-[2px] rounded-full">20% OFF</span>
                </div>
              </div>
            </nav>

            {/* Right side - Search, User, Wishlist, Cart */}
            <div className="flex items-center">
              {/* Search */}
              <button className="p-2 text-headingPrimary hover:text-primary relative">
                <Search className="h-5 w-5" />
              </button>
              {/* User Account */}
              <button className="p-2 text-headingPrimary hover:text-primary relative">
                <User className="h-5 w-5" />
              </button>

              {/* Wishlist */}
              <button className="hidden md:inline-block p-2 text-headingPrimary hover:text-primary relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Shopping Cart */}
              <button className="p-2 text-headingPrimary hover:text-primary relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;