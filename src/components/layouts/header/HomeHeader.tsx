"use client";
import React, { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import logoImg from "../../../../public/assets/images/logo/logo.png";
import Link from "next/link";
import Image from "next/image";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button (hamburger icon) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-headingPrimary hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <Link
              href="#"
              className="text-gray-700 font-semibold hover:text-primary flex items-center gap-1"
            >
              Deals of the Week
              <span className="bg-danger/10 font-semibold text-danger text-xs px-2 py-1 rounded-full">
                Hot
              </span>
            </Link>
            <Link href="#" className="text-gray-700 font-semibold hover:text-primary">
              New Arrivals
            </Link>
            <Link href="#" className="text-gray-700 font-semibold hover:text-primary">
              Men
            </Link>
            <Link href="#" className="text-gray-700 font-semibold hover:text-primary">
              Women
            </Link>
            <Link href="#" className="text-gray-700 font-semibold hover:text-primary">
              Kids
            </Link>
            <Link
              href="#"
              className="text-gray-700 font-semibold hover:text-primary flex items-center gap-1"
            >
              Sale
              <span className="bg-primary/10 text-primary text-xs px-2 py-[2px] rounded-full">
                20% OFF
              </span>
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-headingPrimary hover:text-primary">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-headingPrimary hover:text-primary">
              <User className="h-5 w-5" />
            </button>
            <button className="hidden md:inline-block p-2 text-headingPrimary hover:text-primary relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 text-headingPrimary hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col p-4 space-y-3">
            <Link href="#" className="text-gray-700 font-medium hover:text-primary">
              Deals of the Week
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-primary">
              New Arrivals
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-primary">
              Men
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-primary">
              Women
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-primary">
              Kids
            </Link>
            <Link href="#" className="text-gray-700 font-medium hover:text-primary">
              Sale
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
