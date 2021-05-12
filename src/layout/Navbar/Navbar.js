import React, { useState } from "react";
import { Link } from "react-router-dom";
import puzzle from "../../assets/icons/puzzle.svg";
import { DarkMode, UserLog } from "../../components";
import useScrollToTop from "../../utils/hook/useScrollToTop";
import MenuLog from "./MenuLog";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [state, setState] = useState(false);
  const [visible] = useScrollToTop();

  function handleClick() {
    setState(!state);
  }

  function hiden() {
    if (visible) return handleClick();
  }

  return (
    <nav className="relative bg-white dark:bg-gray-800 md:sticky anime top-0 z-50">
      <div className="m-auto px-4">
        <div className="flex justify-between">
          {/* leftSide */}

          {/* logo */}

          <div className="flex space-x-4">
            <Link to="/shop_mobile" className="flex items-center px-2">
              <img
                className="bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300"
                src={puzzle}
                alt="logo"
              />
              <span className="text-2xl font-semibold dark:text-white">
                Mądre Zabawki
              </span>
            </Link>
          </div>

          {/* rightSide */}

          {/* button menu mobile */}

          <div className="flex sm:space-x-6">
            <div
              className="relative z-20 flex md:hidden items-center"
              onClick={() => handleClick()}
            >
              <i
                className={`
                  ${
                    state
                      ? "fas fa-times bg-blue-400 px-1 flex rounded-md justify-end items-center"
                      : "fas fa-bars "
                  }text-black dark:text-white cursor-pointer text-3xl
                    `}
              ></i>
            </div>

            {/* menu */}

            <div className="hidden md:flex justify-around sm:space-x-6">
              <MenuLog />
            </div>

            {/* dark mode */}

            <div className="hidden sm:grid items-center">
              <DarkMode />
            </div>

            {/* user login and register */}

            <div className="grid items-center m-2">
              <UserLog />
            </div>
          </div>
        </div>

        {/* list menu */}
        <button
          onClick={handleClick}
          tabIndex="-1"
          className={`${
            state
              ? "fixed inset-0 w-full h-full opacity-50 cursor-default bg-black"
              : "hidden"
          }`}
        ></button>
      </div>
      <div>
        <div
          className={`fixed md:hidden h-full w-64 space-y-6 px-2 py-7 z-50 transform ${
            state ? hiden() : "-translate-x-full"
          } bg-blue-500 transition duration-300 ease-in-out inset-y-0 left-0`}
        >
          <div className="flex space-x-4">
            {/* logo mobile */}

            <Link to="/shop_mobile" className="flex items-center px-2">
              <img
                className="bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300"
                src={puzzle}
                alt="logo"
                onClick={() => handleClick()}
              />
              <span className="text-2xl font-semibold">Sensoryka</span>
            </Link>
          </div>
          <div onClick={() => handleClick()}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
