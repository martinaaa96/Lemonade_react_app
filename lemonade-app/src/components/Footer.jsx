import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-[1240px] mx-auto flex flex-col px-4">
          <div className="sm:flex justify-center items-center">
            <Link to="/">
              <img
                style={{ width: "150px" }}
                className=""
                src="/logo.jpg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex w-full sm:max-[280px] my-4">
            <SiFacebook className="icon" />
            <FiInstagram className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
