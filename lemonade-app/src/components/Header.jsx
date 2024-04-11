import { LuShoppingCart } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/productContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);

  const { cart } = useContext(ProductContext);

  const handleNav = () => {
    setOpen(!open);
    setLogo(!logo);
  };

  return (
    <>
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 font-serif">
        <div>
          <Link to="/" className="my-7 md:my-0 md:ml-8 cursor: pointer">
            <img
              src="/logo.png"
              alt="logo"
              className="hover:scale-110 duration-500"
              style={{ width: "100px" }}
            />
          </Link>
        </div>
        <ul className=" hidden md:flex">
          <li className="text-gray-800 hover:text-pink-400 duration-500">
            <Link to="/" className="my-7 md:my-0 md:ml-8">
              Home
            </Link>
          </li>
          <li className="text-gray-800 hover:text-pink-400 duration-500">
            <Link to="/about" className="my-7 md:my-0 md:ml-8">
              About
            </Link>
          </li>
          <li className="text-gray-800 hover:text-pink-400 duration-500">
            <Link to="/catalog" className="my-7 md:my-0 md:ml-8">
              Menu
            </Link>
          </li>

          <li className="text-gray-800 hover:text-pink-400 duration-500"></li>
        </ul>
        <div className="hidden md:flex">
          <LuShoppingCart
            size={20}
            className=" mr-5 my-7 md:my-0 md:ml-8 hover:text-pink-400 duration-500 "
          />
          {cart.length > 0 && (
            <span className="bg-pink-500 text-white rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>

        <div onClick={handleNav} className="md:hidden z-10">
          {open ? <HiXMark size={20} /> : <RiMenu3Fill size={20} />}
        </div>
        <div
          onClick={handleNav}
          className={
            open
              ? "absolute left-0 top-0 w-full bg-pink-100/90 px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <img src="/logo.png" alt="logo" style={{ width: "100px" }} />
            <li className="text-gray-800 border-b hover:text-pink-400 duration-500">
              <Link to="/" className="my-7 md:my-0 md:ml-8">
                Home
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-pink-400 duration-500">
              <Link to="/about" className="my-7 md:my-0 md:ml-8">
                About
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-pink-400 duration-500">
              <Link to="/catalog" className="my-7 md:my-0 md:ml-8">
                Menu
              </Link>
            </li>

            <li className="text-gray-800 border-b hover:text-pink-400 duration-500"></li>
          </ul>
        </div>
      </div>
    </>
  );
}
