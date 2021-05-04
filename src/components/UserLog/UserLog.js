import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/Config";
import AppContext from "../../store/AppContext";
import "./userlog.css";

export default function UserLog() {
  const [isLoggedIn, user] = useContext(AppContext);
  const [state, setState] = useState(false);
  const history = useHistory();

  const handleClick = () => setState(!state);
  const closeMenu = () => setState(false);

  function logout() {
    auth.signOut().then(() => {
      history.replace("/login");
    });
  }

  return (
    <span onClick={handleClick}>
      {isLoggedIn ? (
        <div onClick={handleClick} className="relative">
          <div
            className={`relative z-10 flex justify-center w-10 h-10 ${
              !state
                ? "hover:text-white hover:bg-blue-500 dark:hover:text-black"
                : ""
            } bg-blue-300 dark:bg-yellow-300 dark:text-white rounded-md cursor-pointer`}
          >
            <i className="fas fa-user absolute top-0 p-1 text-center flex justify-center "></i>
            <p className="absolute bottom-0 text-sm flex w-max justify-center px-1">
              {user.user}
            </p>
          </div>
          <button
            onClick={closeMenu}
            tabIndex="-1"
            className={`${
              state
                ? "fixed inset-0 w-full h-full opacity-0 cursor-default bg-black"
                : "hidden"
            }`}
          ></button>
          <div
            className={`${!state ? "cliked" : "block"} ${
              !isLoggedIn ? "cliked" : ""
            } dropdown-menu dark:bg-gray-800 border p-1 z-10`}
          >
            <ul>
              <li className="bg-blue-300 cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-yellow-300 dark:hover:text-black rounded-md transition duration-300">
                {isLoggedIn && (
                  <div className="p-2" onClick={logout}>
                    Wyloguj
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <i className="fas fa-user w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-full cursor-pointer flex items-center justify-center transition duration-300"></i>
        </Link>
      )}
    </span>
  );
}
