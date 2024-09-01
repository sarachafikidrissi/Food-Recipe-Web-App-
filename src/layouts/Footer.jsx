import React from "react";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#d8d8d830] px-20 py-10 flex flex-col items-center mt-5 "> 
      <div className="w-[90%] border-b-[2px] pb-10 flex justify-between items-center">
      <div className="  w-[30%] h-[90%] flex flex-col gap-y-3">
        <img
          onClick={() => {
            navigate("./");
          }}
          src={assets.logo}
          alt="logo"
          className="w-[150px]  "
        />
        <p className="text-gray-400">
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment
        </p>
      </div>
      <div className=" w-[60%] h-[90%] flex  gap-x-[10vw]">
        <div className="flex flex-col gap-y-3">
        <h1 className="font-medium">Tastebite</h1>
        <div className="flex flex-col gap-y-3 ">
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">About Us</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Careers</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Contact Us</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Feedback</span>
        </div>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className="font-medium">Legal</h1>
        <div className="flex flex-col gap-y-3 ">
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Terms</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Conditions</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Cookies</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Copyright</span>
        </div>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className="font-medium">Follow</h1>
        <div className="flex flex-col gap-y-3 ">
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Facebook</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Twitter</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Instagram</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Youtube</span>
        </div>
        </div>
      </div>
      </div>

      <div className="mt-5 flex justify-between w-[90%]">
        <span className="text-[12px] text-gray-400">© 2020 Tastebite - All rights reserved</span>

        <div className="flex gap-x-5">
        <SlSocialFacebook className="text-3xl hover:text-orange-600 cursor-pointer"/>
        <SlSocialInstagram className="text-3xl hover:text-orange-600 cursor-pointer"/>
        <SlSocialTwitter className="text-3xl hover:text-orange-600 cursor-pointer"/>
        <SlSocialYoutube className="text-3xl hover:text-orange-600 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
