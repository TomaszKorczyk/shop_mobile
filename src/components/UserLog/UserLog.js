import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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
    closeMenu();
    auth.signOut().then(() => {
      history.push("/shop_mobile");
    });
  }

  return (
    <>
      {isLoggedIn ? (
        <div onClick={handleClick} className="relative">
          <div
            className={`relative z-10 flex justify-center w-10 h-10 ${
              !state
                ? "hover:text-white hover:bg-blue-500 dark:hover:text-black"
                : ""
            } bg-blue-300 dark:bg-yellow-300 dark:text-white rounded-md cursor-pointer`}
          >
            <i className="far fa-user-circle w-full h-full p-1 text-2xl flex justify-center items-center"></i>
          </div>
          <button
            onClick={closeMenu}
            tabIndex="-1"
            className={`${
              state
                ? "fixed inset-0 w-full h-full opacity-30 cursor-default bg-black"
                : "hidden"
            }`}
          ></button>
          <div
            className={`${
              !state ? "cliked" : "block"
            } dropdown-menu dark:bg-gray-800 border p-1 z-10`}
          >
            <ul>
              <li className="w-full flex m-auto">
                <p className="text-sm select-none cursor-default m-auto w-max grid px-1 border-b mb-2">
                  {user.user}
                </p>
              </li>
              <li
                onClick={handleClick}
                className="bg-blue-300 cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-yellow-300 dark:hover:text-black rounded-md transition duration-300"
              >
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
        <div className="hidden"></div>
      )}
    </>
  );
}
