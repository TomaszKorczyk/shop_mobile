import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AppContext from "../../store/AppContext";

export default function GuestRoute(props) {
  const [isLoggedIn, user] = useContext(AppContext);

  if (!isLoggedIn || user.role !== "admin" || user.role !== "user") {
    return <Route {...props} />;
  } else {
    return <Redirect to="/contact" />;
  }
}
