import { LuShoppingCart } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";
//import {motion } from "framer-motion";
export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
          <div className="mb-0 lg:mb-0">
            <img className="w-15 h-10" src="../../public/logo.jpg" alt="logo" />
          </div>
          <div
            onClick={() => setisOpen(!isOpen)}
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <RiMenu3Fill />

            <HiXMark />
          </div>

          <ul className="md:flex pl-9 md:pl-0">
            <Link to="/" className="font-semibold my-7 md:my-0 md:ml-8">
              Home
            </Link>
            <Link to="/menu" className="font-semibold my-7 md:my-0 md:ml-8">
              Menu
            </Link>
            <Link to="/about" className="font-semibold my-7 md:my-0 md:ml-8">
              About us
            </Link>
            <Link to="/contact" className="font-semibold my-7 md:my-0 md:ml-8">
              Contact
            </Link>
            
              <LuShoppingCart className="my-7 md:my-0 md:ml-8" />
        
          </ul>
        </div>
      </div>
    </nav>
  );
}
