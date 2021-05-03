import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../store/AppContext";

export default function UserLog() {
  const [isLoggedIn, user] = useContext(AppContext);
  return (
    <span>
      {isLoggedIn ? (
        <div className="relative flex justify-center w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-md cursor-pointer transition duration-300">
          <i className="fas fa-user absolute top-0 p-1 text-center flex justify-center "></i>
          <p className="absolute bottom-0 text-sm flex w-max justify-center">{user.user}</p>
        </div>
      ) : (
        <Link to="./login">
          <i className="fas fa-user w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-full cursor-pointer flex items-center justify-center transition duration-300"></i>
        </Link>
      )}
    </span>
  );
}
