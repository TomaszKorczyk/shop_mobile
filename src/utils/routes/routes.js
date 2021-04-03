import React from "react";
import Home from "../../layout/Home/Home";
import Contact from "../../layout/Contact/Contact";

export default [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    title: "Kontakt",
    path: "/contact",
    component: () => <Contact />,
    protected: null,
  },
];
