import React, { useState } from "react";
import Ombrulla from "../../assets/logo.svg";
import Arrow from "../../assets/arrow_drop_down.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const handleServicesHover = () => {
    setShowServicesDropdown(true);
    setShowProductDropdown(false);
  };

  const handleProductHover = () => {
    setShowProductDropdown(true);
    setShowServicesDropdown(false);
  };

  const handleDropdownLeave = () => {
    setShowServicesDropdown(false);
    setShowProductDropdown(false);
  };

  return (
    <div
      className="md:px-14 px-0 p-4 flex flex-row justify-between items-center md:mx-10 mx-6 relative"
      onMouseLeave={handleDropdownLeave}
    >
      <img src={Ombrulla} className="h-12 md:h-8" alt="" />
      <div className="md:flex flex-row hidden gap-x-6 mr-11 items-center relative">
        <h1 className="font-bold text-blue-700">Home</h1>
        <div
          className="md:relative group flex items-center"
          onMouseEnter={handleServicesHover}
        >
          <h1 className="font-bold hover:text-blue-700 cursor-pointer">
            Services
          </h1>
          {showServicesDropdown && (
            <div className="absolute text-base left-0 z-[90] top-full pt-5 space-y-2 group-hover:block font-semibold transition duration-300 ease-in-out font-sans w-64 text-left">
              <ul className="bg-white">
                {/* Drop down content here is */}
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                    AI Visual Inspection
                  </li>
                </Link>
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                    AI Visual Inspection
                  </li>
                </Link>
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                    AI Visual Inspection
                  </li>
                </Link>
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                    AI Visual Inspection
                  </li>
                </Link>
                
              </ul>
            </div>
          )}
          <img src={Arrow} alt="" className="ml-1 mt-1 cursor-pointer" />
        </div>
        <div
          className="md:relative group flex items-center"
          onMouseEnter={handleProductHover}
        >
          <h1 className="font-bold hover:text-blue-700 cursor-pointer">
            Product
          </h1>
          {showProductDropdown && (
            <div className="absolute text-base left-0 z-[90] top-full pt-5 space-y-2 group-hover:block font-semibold transition duration-300 ease-in-out font-sans w-64 text-left">
              <ul className="bg-white">
                {/* Dropdown content */}
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="border-b border-gray-300 px-[0.938rem] py-[1.25rem] font-semibold text-black hover:text-primary">
                   Asset performance Mangement
                  </li>
                </Link>
                {/* Add more dropdown items as needed */}
              </ul>
            </div>
          )}
          <img src={Arrow} alt="" className="ml-1 mt-1 cursor-pointer" />
        </div>
        <h1 className="font-bold hover:text-blue-700 cursor-pointer">About</h1>
        <h1 className="font-bold hover:text-blue-700 cursor-pointer">Blog</h1>
        <h1 className="font-bold hover:text-blue-700 cursor-pointer">
          Contact
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
