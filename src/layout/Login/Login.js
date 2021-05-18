import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../utils/hook/useForm";
import validate from "./ValidationForm";
import { auth } from "../../config/Config";
import content from "./content";
import "./login.css";
import AppContext from "../../store/AppContext";

export default function Login() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user] = useContext(AppContext);
  const { handleChange, handleSubmit, values, errors } = useForm(
    login,
    validate
  );

  function login(e) {
    if (isLoading) return;
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        setError(false);
        setIsLoading(false);
        if (isLoading || user.role !== "user" || user.role === "admin") {
          history.push("/admin");
        } else history.push("/shop_mobile");
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex h-full w-full justify-center items-center py-4 lg:py-10 sm:m-auto anime">
        <div className="bg-blue-300 dark:bg-gray-800 justify-center items-center rounded-md mx-5 grid grid-cols-1 w-full sm:w-3/4 lg:w-4/6 lg:h-full lg:m-auto">
          <h1 className="text-center text-2xl pb-2 my-2">Login</h1>
          <div className="h-full">
            <form
              className="block justify-center items-center w-full px-2 md:w-3/4 md:m-auto lg:w-1/2"
              onSubmit={handleSubmit}
              // autoComplete="off"
            >
              {content.inputs.map((input, key) => {
                return (
                  <div key={key} className="w-full flex px-2 group">
                    <div className="flex items-center pb-8 p-3 justify-center">
                      <i
                        className={`${input.icon} text-xl ${
                          !errors[input.name]
                            ? " group-hover:text-white dark:group-hover:text-yellow-300 anime"
                            : "text-red-500 opacity-80"
                        }`}
                      ></i>
                    </div>
                    <div className="w-full">
                      <div className="formik">
                        <input
                          className={`input ${
                            errors[input.name]
                              ? "border-red-500"
                              : "group-hover:border-white dark:group-hover:border-yellow-300 dark:border-white text-white border-black anime"
                          }`}
                          type={input.type}
                          name={input.name}
                          placeholder=" "
                          onChange={handleChange}
                          value={values[input.name]}
                        />
                        <label
                          className={`label bg-blue-300 dark:bg-gray-800 ${
                            !errors[input.name]
                              ? "group-hover:text-white anime dark:group-hover:text-yellow-300"
                              : "text-red-500"
                          }`}
                          htmlFor={input.name}
                        >
                          {input.label}
                        </label>
                      </div>
                      <div>
                        <p
                          className={`errLogin pl-2 md:pl-0 md:justify-center ${
                            !errors[input.name] ? "invisible" : "visible"
                          }`}
                        >
                          {!errors[input.name] ? "'" : errors[input.name]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button
                type="submit"
                className="submit hover:text-white hover:border-white hover:opacity-100 test dark:test dark:hover:text-gray-500 focus:outline-none anime"
              >
                {isLoading ? (
                  <i className="fas fa-circle-notch fa-spin"></i>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            {error !== "" && <p className="err">{error}</p>}

            <div className="p-1 m-1 justify-center">
              <p className="text-sm text-center">Don't have an account?</p>
              <Link
                to="/signup"
                className="flex justify-center w-max m-auto pt-1 italic border-b border-black hover:text-white hover:border-white anime"
              >
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
