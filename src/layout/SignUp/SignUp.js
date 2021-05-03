import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../utils/hook/useForm";
import validate from "./ValidationForm";
import { auth, db } from "../../config/Config";
import content from "./content";
import "./signup.css";

export default function SignUp(props) {
  const [error, setError] = useState("");
  const history = useHistory();
  const { handleChange, handleSubmit, values, errors } = useForm(
    signup,
    validate
  );

  function signup() {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: values.username,
            Email: values.email,
            Password: values.password,
            Role: "user",
          })
          .then(() => {
            history.replace("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  }

  return (
    <div className="container justify-center items-center my-10 sm:my-1 sm:m-auto lg:h-2/3 lg:my-5 anime">
      <div className="bg-blue-300 dark:bg-gray-800 justify-center items-center grid grid-cols-1 rounded-md mx-5 py-2 lg:w-2/3 lg:h-full lg:m-auto">
        <h1 className="text-center text-2xl pb-2 my-2">SignUp</h1>
        <form
          autoComplete="off"
          className="container justify-center items-center w-full px-2 lg:w-1/2 lg:m-auto"
          onSubmit={handleSubmit}
        >
          {content.inputs.map((input, key) => {
            return (
              <div key={key} className="w-full flex px-2 group">
                <div className="flex items-center pb-8 p-3 justify-center">
                  <i
                    className={`${input.icon} text-xl ${
                      !errors[input.name] ?
                    " group-hover:text-white dark:group-hover:text-yellow-300 anime":"text-red-500 opacity-80"
                    }`}
                  ></i>
                </div>
                <div className="w-full">
                  <div className="formik">
                    <input
                      className={`input ${
                        errors[input.name]
                          ? "border-red-500"
                          : "group-hover:border-white dark:group-hover:border-yellow-300 dark:border-white border-black anime"
                      }`}
                      type={input.type}
                      name={input.name}
                      placeholder=" "
                      onChange={handleChange}
                      value={values[input.name]}
                    />
                    <label
                      htmlFor={input.label}
                      className={`label bg-blue-300 dark:bg-gray-800 ${
                        !errors[input.name] ?
                        "group-hover:text-white anime dark:group-hover:text-yellow-300":"text-red-500"
                      }`}
                    >
                      {input.label}
                    </label>
                  </div>
                  <p
                    className={`err ${
                      !errors[input.name] ? "invisible" : "visible"
                    }`}
                  >
                    {!errors[input.name] ? "'" : errors[input.name]}
                  </p>
                </div>
              </div>
            );
          })}
          {error && <div className="">{error}</div>}
          <button
            type="submit"
            className="submit hover:text-white hover:border-white hover:opacity-100 test dark:test dark:hover:text-gray-500 focus:outline-none anime"
          >
            Register
          </button>
        </form>
        <div className="p-1 m-1 justify-center">
          <p className="text-sm text-center">Already have an account?</p>
          <Link
            to="/login"
            className="flex justify-center w-max m-auto pt-1 italic border-b border-black hover:text-white hover:border-white anime"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
