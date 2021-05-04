import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/Config";
import AppContext from "../../store/AppContext";
import './userlog.css'

export default function UserLog() {
  const [isLoggedIn, user] = useContext(AppContext);
  const [state, setState] = useState(false);
  const history = useHistory();

  const handleClick = () => setState(!state);

  function logout() {
    auth.signOut().then(() => {
      history.replace("/login");
    });
  }
  console.log(user);
  return (
    <span onClick={handleClick}>
      {isLoggedIn ? (
        <div
          onClick={handleClick}
          className="relative flex justify-center w-10 h-10 bg-blue-300 dark:opacity-80 dark:hover:opacity-100 hover:text-white hover:bg-blue-500 dark:text-white dark:hover:text-black dark:bg-yellow-300 hover:opacity-100 rounded-md cursor-pointer transition duration-300"
        >
          <i className="fas fa-user absolute top-0 p-1 text-center flex justify-center "></i>
          <p className="absolute bottom-0 text-sm flex w-max justify-center">
            {user.user}
          </p>
          <div className={`${!state && "cliked"} dropdown-menu anime`}>
            <ul>
              <li className="bg-blue-500 cursor-pointer hover:bg-blue-300 rounded-md">
                {isLoggedIn && <div className="p-2" onClick={logout}>Wyloguj</div>}
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
