import React from "react";
import puzzle from "../../assets/icons/puzzle.svg";
import { Component } from "react";
import routes from "../../utils/routes/routes";
import DarkMode from "../../components/DarkMode";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="bg-white dark:bg-gray-800 md:sticky anime top-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            {/* logo */}

            <div className="flex space-x-4">
              <Link to="/" className="flex items-center px-2">
                <img
                  className="bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 dark:hover:bg-yellow-500 rounded text-2xl m-2 transition duration-300"
                  src={puzzle}
                  alt="logo"
                />
                <span className="text-2xl font-semibold dark:text-white">
                  Sensoryka
                </span>
              </Link>
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
                    {routes.map((route, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="text-gray-800 cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 transition duration-200"
                            to={route.path}
                          >
                            {route.title}
                          </Link>
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
            {routes.map((route, index) => {
              return (
                <Link
                  key={index}
                  className="block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200"
                  to={route.path}
                >
                  {route.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </nav>
    );
  }
}

export default Navbar;
