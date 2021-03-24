import React from "react";
import puzzle from "../../assets/icons/puzzle.svg";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import DarkMode from "../../components/DarkMode";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems dark:bg-gray-800">
        <div className="flex justify-items-start items-center mx-2 w-1/6 min-h-full">
          <h1 className="text-2xl font-semibold dark:text-white">Sensoryka</h1>
          <img
            className="bg-blue-300 dark:bg-yellow-300 opacity-80 hover:opacity-100 hover:bg-blue-600 rounded text-2xl m-2 transition duration-300"
            src={puzzle}
            alt="logo"
          />
        </div>
        <div
          className="invisible flex justify-items-center items-center"
          onClick={this.handleClick}
        >
          <i
            className={
              this.state.clicked
                ? "fas fa-times nav-links dark:text-white dark:hover:text-yellow-300"
                : "fas fa-bars nav-links dark:text-white dark:hover:text-yellow-300"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={`${item.cName} dark:text-white dark:hover:text-gray-800 dark:hover:transition dark:hover:duration-200`}
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          <li className="grid items-center justify-center min-h-full">
            <DarkMode />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
