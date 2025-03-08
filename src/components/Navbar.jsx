import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <nav className="absolute w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            <li>Home</li>
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            <li>About</li>
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            <li>Projects</li>
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            <li>Testimonials</li>
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sing up
        </button>
        <img
          src={assets.menu_icon}
          alt="menu_icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      {/* ----------mobie menu -------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}
      >
        <div
          className="flex justify-end p-6 cursor-pointer"
          onClick={() => setShowMobileMenu(false)}
        >
          {" "}
          <img src={assets.cross_icon} className="w-6" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            <li>Home</li>
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            <li>About</li>
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            <li>Projects</li>
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            <li>Testimonials</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
