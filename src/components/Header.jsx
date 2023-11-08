import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div
      className="bg-white h-12 border-b shadow-sm sticky top-0
    z-40"
    >
      <header
        className="flex justify-between items-center
    px-3 max-w-6xl mx-auto"
      >
        <div>
          <img
            src="https://pbs.twimg.com/profile_banners/1172161229512593408/1588419709/1500x500"
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold
                          text-gray-400 border-b-[3px] border-b-transparent 
                          ${
                            pathMatchRoute("/about") &&
                            "text-black border-b-red-500"
                          }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold
                          text-gray-400 border-b-[3px] border-b-transparent 
                          ${
                            pathMatchRoute("/service") &&
                            "text-black border-b-red-500"
                          }`}
              onClick={() => navigate("/service")}
            >
              Service
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold
                          text-gray-400 border-b-[3px] border-b-transparent 
                          ${
                            pathMatchRoute("/contact") &&
                            "text-black border-b-red-500"
                          }`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
