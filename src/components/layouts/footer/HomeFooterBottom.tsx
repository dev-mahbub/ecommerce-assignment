"use client";
import Image from "next/image";
import React from "react";
import AppStoreImg from '../../../../public/assets/images/footer/app-store.png';
import PlayStoreImg from '../../../../public/assets/images/footer/play-store.png';
import MasterCardImg from '../../../../public/assets/images/footer/mastercard.png';
import VisaImg from '../../../../public/assets/images/footer/visa.png';
import PaypalImg from '../../../../public/assets/images/footer/paypal.png';
import AmexImg from '../../../../public/assets/images/footer/amex.png';
import WesternImg from '../../../../public/assets/images/footer/westernunion.png';

const HomeFooterBottom = () => {
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="container py-6 px-0 flex justify-between items-center text-center">
        
        {/* Contact */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-cardLight flex items-center justify-center">
              <i className="fa-regular fa-headset text-base"></i>
            </div>
            <div>
              <p className="mb-0 text-[12px] text-body">8:30 AM – 10:30 PM</p>
              <p className="mb-0 text-sm font-semibold text-headingPrimary">
                +16283998030
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Download App */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex items-center">
                <div className="flex flex-col items-start mr-8 flex-wrap">
                    <p className="text-base font-bold text-headingPrimary mb-0">Download Now on</p>
                    <p className="text-[11px] text-gray-500 mb-0">
                        Free home delivery on your first purchase
                    </p>
                </div>
                <div className="flex gap-3">
                    <Image
                    src={AppStoreImg}
                    alt="App Store"
                    width={133}
                    height={40}
                    />
                    <Image
                    src={PlayStoreImg}
                    alt="Google Play"
                    width={133}
                    height={40}
                    />
                </div>
            </div>
        </div>
        

        {/* Payment Methods */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium text-body mb-3">We Support</p>
          <div className="flex gap-4 flex-wrap justi0y-start">
            <Image
              src={MasterCardImg}
              alt="Mastercard"
              width={33}
              height={20}
            />
            <Image
              src={VisaImg}
              alt="Visa"
              width={33}
              height={20}
            />
            <Image
              src={PaypalImg}
              alt="PayPal"
              width={33}
              height={20}
            />
            <Image
              src={AmexImg}
              alt="American Express"
              width={33}
              height={20}
            />
            <Image
              src={WesternImg}
              alt="Western Union"
              width={33}
              height={20}
            />
          </div>
        </div>
        </div>
      </div>

      {/* Copyright + Links */}
      <div className="border-t border-gray-200">
        <div className="container px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-0 text-base">© Copyright 2025 – TailGrids.</p>
          <div className="flex gap-4 mt-3 md:mt-0 text-base">
            <a href="#" className="hover:text-headingPrimary">Refund Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-headingPrimary">Terms of Services</a>
            <span>|</span>
            <a href="#" className="hover:text-headingPrimary">Shipping policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterBottom;
