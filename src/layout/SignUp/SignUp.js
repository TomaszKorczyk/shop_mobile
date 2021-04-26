import React, { useState } from "react";
import { auth, db } from "../../config/Config";
import { Link, useHistory } from "react-router-dom";

export default function SignUp(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const Signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
            Role: "user",
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setPassword2("");
            setError("");
            history.replace("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="init">
      <div className="bg-blue-300">
        <h1>SignUp</h1>
        <div>
          <form autoComplete="off" onSubmit={Signup}>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              required
              placeholder=" "
              className=""
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>Email</label>
            <input
              type="email"
              required
              placeholder=" "
              className=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Password</label>
            <input
              type="password"
              required
              placeholder=" "
              className=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>Confirm password</label>
            <input
              type="password"
              required
              placeholder=" "
              className=""
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
            <button type="submit">Register</button>
          </form>
          {error && <div>{error}</div>}
          <span>
            Already have an account?
            <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
