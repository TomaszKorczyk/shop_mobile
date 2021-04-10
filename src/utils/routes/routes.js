import React from "react";
import Home from "../../layout/Home/Home";
import Contact from "../../layout/Contact/Contact";

const routes = [
  {
    title: "Home",
    path: "/shop_mobile",
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
export default routes;
