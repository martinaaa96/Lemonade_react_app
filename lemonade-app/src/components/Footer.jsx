import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link className="flex items-center">
                <img src="/logo.jpg" alt="logo" style={{ width: "100px" }} />
              </Link>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <a className="hover:underline">Homemade Lemonade</a>. All
              Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <SiFacebook className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
              <FiInstagram className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
