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
    <div className="container justify-center items-center my-10  anime">
      <div className="bg-blue-300 dark:bg-gray-800 justify-center rounded-md mx-5 py-2">
        <h1 className="text-center text-2xl">SignUp</h1>

        <form
          autoComplete="off"
          className="container justify-center items-center px-2"
          onSubmit={handleSubmit}
        >
          {content.inputs.map((input, key) => {
            return (
              <div key={key} className="w-full px-2">
                <div className="formik">
                  <input
                    className={`input ${errors[input.name] && "inputErr"}`}
                    type={input.type}
                    name={input.name}
                    placeholder=" "
                    onChange={handleChange}
                    value={values[input.name]}
                  />
                  <label
                    htmlFor={input.label}
                    className="label dark:bg-gray-800"
                  >
                    {input.label}
                  </label>
                </div>
                {errors[input.name] ? (
                  <p className="err py-0">{errors[input.name]}</p>
                ) : (
                  <p className="noError"></p>
                )}
              </div>
            );
          })}
          {error && <div className="">{error}</div>}
          <button
            type="submit"
            className="flex justify-center border border-black hover:border-white hover:text-white tracking-wider rounded-md  m-auto my-1 py-1 bg-blue-400 opacity-70 hover:opacity-100 focus:outline-none anime"
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
