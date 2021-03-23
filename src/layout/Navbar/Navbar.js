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
      <nav className="NavbarItems dark:bg-black">
        <div className="flex justify-self-start items-center mx-2 w-4/12">
          <h1 className="text-2xl font-semibold dark:text-white">Sensoryka</h1>
          <img
            className="bg-green-700 dark:bg-yellow-300 opacity-80 hover:opacity-100 rounded text-2xl m-1"
            src={puzzle}
            alt="logo"
          />
        </div>
        <div className="hidden" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul
          className={
            this.state.clicked
              ? "nav-menu active"
              : "flex justify-around w-5/12 items-center"
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={`${item.cName} dark:text-white dark:hover:text-yellow-300`}
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          <div className="m-2">
            <DarkMode />
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
