import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AppContext from "../../store/AppContext";

export default function AuthRoute(props) {
  const [isLoggedIn, user] = useContext(AppContext);

  if (isLoggedIn || user.role ==="user" || user.role !=="admin") {
    return <Route {...props} />;
  } else {
    return <Redirect to="/contact" />;
  }
}
