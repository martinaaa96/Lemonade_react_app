import { LuShoppingCart } from "react-icons/lu";
//import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";

//import React from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-cente bg-white">
          <Link to="/" className="mb-0 lg:mb-0 flex items-center gap-1">
            <img style={{ width: "100px" }} src="/logo.jpg" alt="logo" />
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <HiXMark /> : <RiMenu3Fill />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            <Link
              to="/"
              className="text-gray-800 hover:text-pink-400 duration-500"
            >
              <li className="font-semibold my-7 md:my-0 md:ml-8">Home</li>
            </Link>
            <Link to="/menu" className="font-semibold my-7 md:my-0 md:ml-8">
              <li className="text-gray-800 hover:text-pink-400 duration-500">
                Menu
              </li>
            </Link>
            <Link to="/about" className="font-semibold my-7 md:my-0 md:ml-8">
              <li className="text-gray-800 hover:text-pink-400 duration-500">
                About
              </li>
            </Link>
            <Link to="/contact" className="font-semibold my-7 md:my-0 md:ml-8">
              <li className="text-gray-800 hover:text-pink-400 duration-500">
                Contact
              </li>
            </Link>
            <Link to="/shop">
              <button>
                <LuShoppingCart className="my-7 md:my-0 md:ml-8 hover:text-pink-400 duration-500 " />
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
