import React from "react";
import puzzle from "../../assets/icons/puzzle.svg";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import DarkMode from "../../components/DarkMode";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="bg-white dark:bg-gray-800 md:sticky transition duration-500 top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* logo */}

            <div className="flex space-x-4">
              <a href="/home.js" className="flex items-center px-2">
                <img
                  className="bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300"
                  src={puzzle}
                  alt="logo"
                />
                <span className="text-2xl font-semibold dark:text-white">
                  Sensoryka
                </span>
              </a>
            </div>

            {/* button menu */}

            <div className="flex space-x-6">
              <div
                className="flex md:hidden items-center"
                onClick={this.handleClick}
              >
                <i
                  className={`
                  ${
                    this.state.clicked ? "fas fa-times " : "fas fa-bars "
                  }text-black dark:text-white cursor-pointer text-3xl
                    `}
                ></i>
              </div>

              {/* menu */}

              <div className="flex justify-around space-x-6">
                <div className="">
                  <ul className="hidden md:grid grid-cols-5 gap-2.5 h-full text-center items-center">
                    {MenuItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            className="text-gray-800 cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 transition duration-200"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* dark mode */}

                <div className="hidden sm:grid items-center">
                  <DarkMode />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* list menu */}

        <div
          className={`absolute md:hidden h-full w-64 space-y-6 px-2 py-7 z-50 transform ${
            this.state.clicked ? "" : "-translate-x-full"
          } bg-blue-500 transition duration-300 ease-in-out inset-y-0 left-0`}
        >
          <div className="flex space-x-4">
            {/* logo mobile */}

            <a href="/" className="flex items-center px-2">
              <img
                className="bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300"
                src={puzzle}
                alt="logo"
              />
              <span className="text-2xl font-semibold">Sensoryka</span>
            </a>
          </div>
          <nav className="divide-y divide-blue-600">
            {MenuItems.map((item, index) => {
              return (
                <a
                  key={index}
                  className="block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200"
                  href={item.url}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      </nav>
    );
  }
}

export default Navbar;
