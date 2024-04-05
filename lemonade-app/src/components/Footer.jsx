import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 font-serif">
        <div className="mx-auto m:full max-w-screen-xl p-4 py-8 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link className="flex items-center">
                <img
                  className="hover:scale-110 duration-500"
                  src="/logo.png"
                  alt="logo"
                  style={{ width: "100px" }}
                />
              </Link>
            </div>
            <div className="md:flex md:justify-between">
              <div className="space-y-10 ml-4">
                <div className="flex flex-col">
                  <p className="text-[#333] text-xl font-semibold ">
                    Work Time
                  </p>
                  <p className="text-md ">Monday to Friday</p>
                  <p className="text-sm font-semibold mt-4 ">8:00-18:00</p>
                </div>
              </div>
              <div className="space-y-10 ml-4">
                <div className="flex flex-col">
                  <p className="text-[#333] text-xl font-semibold ">Address</p>
                  <p className="text-sm ">Sofia</p>
                  <p className="text-sm font-semibold mt-4 ">bul. Bulgaria 3</p>
                </div>
              </div>
              <div className="space-y-10 ml-4">
                <div className="flex flex-col">
                  <p className="text-[#333] text-xl font-semibold ">Contacts</p>
                  <p className="text-sm ">Email: lemonade@gmail.com</p>
                  <p className="text-sm font-semibold mt-4 ">
                    Tel: +359 888 663 255
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023
              <a className="hover:underline"> Homemade Lemonade</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <SiFacebook className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:scale-110 duration-500" />
              <FiInstagram className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:scale-110 duration-500" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
