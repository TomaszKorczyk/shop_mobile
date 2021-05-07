import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../store/AppContext";
import { routes } from "../../utils/routes";

export default function MenuLog() {
  const [isLoggedIn, user] = useContext(AppContext);

  useEffect(() => {
    if (isLoggedIn) {
      if (user.role === "admin") {
        return (
          <div>
            {routes.map((route, key) => {
              <div>
                <Link
                  key={key}
                  to={route.path || route.protected === "admin"}
                ></Link>
              </div>;
            })}
          </div>
        );
      } else if (user.role === "user") {
        return (
          <div>
            {routes.map((route, key) => {
              <div>
                <Link
                  key={key}
                  to={route.path || route.protected === "user"}
                ></Link>
              </div>;
            })}
          </div>
        );
      } else if (!isLoggedIn) {
        return (
          <div>
            {routes.map((route, key) => {
              <div>
                <Link
                  key={key}
                  to={route.path || route.protected === "quest"}
                ></Link>
              </div>;
            })}
          </div>
        );
      }
    }
  }, [isLoggedIn, user]);

  return (
    <div className="flex justify-around sm:space-x-6">
      {/* Admin Log */}

      {user.role === "admin" && (
        <div className="flex justify-around sm:space-x-6">
          {routes.map((route) => {
            if (route.protected === "admin") {
              return (
                <div>
                  <div className="hidden md:grid gap-2.5 h-full text-center items-center">
                    <Link
                      className="text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200"
                      to={route.path}
                    >
                      {route.title}
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      {/* User Log */}

      {user.role === "user" && (
        <div className="flex justify-around sm:space-x-6">
          {routes.map((route, key) => {
            if (route.protected === "user")
              return (
                <div>
                  <div className="hidden md:grid gap-2.5 h-full text-center items-center">
                    <Link
                      className="text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200"
                      to={route.path}
                      key={key}
                    >
                      {route.title}
                    </Link>
                  </div>
                </div>
              );
          })}
        </div>
      )}

      {/* No Log */}

      {!isLoggedIn && (
        <div className="flex justify-around sm:space-x-6">
          {routes.map((route, index) => {
            if (route.protected === "user" || route.protected === "guest") {
              return (
                <div>
                  <div className="hidden md:grid gap-2.5 h-full text-center items-center">
                    <Link
                      className="text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200"
                      to={route.path}
                      key={index}
                    >
                      {route.title}
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
