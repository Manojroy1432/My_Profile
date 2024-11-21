import React from "react";
import { assets } from "../assets/assets";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-4 md:mb-0">
           <div className=" flex-col flex md:flex-row items-center justify-center gap-2 md:gap-4">
            <img src={assets.logo_dark}/>
           <h1 className="text-2xl font-bold">BrandName</h1>
           </div>
            <p className="text-gray-400 text-sm mt-2">
              Making the world a better place, one step at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li>
                <a
                  href="#Header"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition "
              aria-label="Facebook"
            >
              <FaSquareFacebook className="text-lg md:text-2xl hover:text-blue-300 "/>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter  className="text-lg md:text-2xl hover:text-blue-200 "/>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition"
              aria-label="Instagram"
            >
             <FaSquareInstagram  className="text-lg md:text-2xl hover:text-red-200 "/>

            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
