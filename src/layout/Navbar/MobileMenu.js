import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../store/AppContext";
import { routes } from "../../utils/routes";

export default function MenuLog() {
  const [isLoggedIn, user] = useContext(AppContext);

  return (
    <div className="divide-y divide-blue-600">
      {/* Admin Log */}

      {isLoggedIn && user.role === "admin" && (
        <ul className="divide-y divide-blue-600">
          {routes.map((route, index) => {
            if (route.protected === "admin") {
              return (
                <li>
                  <Link
                    key={index}
                    className="block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200"
                    to={route.path}
                  >
                    {route.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      )}

      {/* User Log */}

      {isLoggedIn && user.role === "user" && (
        <ul className="divide-y divide-blue-600">
          {routes.map((route, index) => {
            if (route.protected === "") {
              return (
                <li>
                  <Link
                    key={index}
                    className="block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200"
                    to={route.path}
                  >
                    {route.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      )}

      {/* No Log */}

      {!isLoggedIn && (
        <ul className="divide-y divide-blue-600">
          {routes.map((route, index) => {
            if (route.protected === "user" || route.protected === "") {
              return (
                <li>
                  <Link
                    key={index}
                    className="block py-2 px-4 text-sm hover:bg-blue-200 rounded text-center transition duration-200"
                    to={route.path}
                  >
                    {route.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
}
