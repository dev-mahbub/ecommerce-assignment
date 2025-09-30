"use client";
import React from "react";
import logoFooter from '../../../../public/assets/images/logo/logo.png';
import Image from "next/image";

export default function HomeFooter() {
  return (
    <footer className="py-[110px] bg-cardLight">
      <div className="container grid grid-cols-12 gap-16">
        {/* Brand Section */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex items-center space-x-2">
            <Image 
              src={logoFooter}
              alt="logo"
              className="h-full"
            />
          </div>
          <p className="text-body mt-6 text-base leading-relaxed">
            TailGrids comes with all the essential UI components you need to
            create beautiful websites based on Tailwind CSS.
          </p>

          <div className="mt-[70px]">
            <p className="text-body mb-2 text-base">Follow us on</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-body hover:text-primary text-[20px]">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-body hover:text-primary text-[20px]">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text-body hover:text-primary text-[20px]">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-body hover:text-primary text-[20px]">
                <i className="fa-brands fa-linkedin"></i>
              </a>
          </div>
          </div>
        </div>

        {/* Clothing */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <h3 className="text-headingPrimary font-semibold mb-6 text-[20px]">Clothing</h3>
          <ul className="space-y-3 text-body text-base">
            <li><a href="#">Tops</a></li>
            <li><a href="#">Tops & Blouses</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Outerwear</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>

        {/* Shoes */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <h3 className="text-headingPrimary font-semibold mb-6 text-[20px]">Shoes</h3>
          <ul className="space-y-3 text-body text-base">
            <li><a href="#">Hills shoed</a></li>
            <li><a href="#">Running Shoes</a></li>
            <li><a href="#">Sandals</a></li>
            <li><a href="#">Ballet Pumps</a></li>
            <li><a href="#">Slingback</a></li>
            <li>
              <a href="#" className="flex items-center gap-2">
                Sale <span className="text-danger bg-danger/10 px-2 py-[2px] rounded-xl text-xs font-semibold">Hot Item</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <h3 className="text-headingPrimary font-semibold mb-6 text-[20px]">Newsletter</h3>
          <p className="text-body text-base mb-4">
            Signup for latest news and insights from TailGrids
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="text-base w-full bg-primary text-white font-medium py-2.5 rounded-xl hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
