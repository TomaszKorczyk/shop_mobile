import React from "react";
import { Home, Login, SignUp, Contact, Admin, AddProducts } from "../../layout";

const routes = [
  {
    title: "Home",
    path: "/shop_mobile",
    exact: true,
    component: () => <Home />,
    protected: "user",
  },
  {
    title: "Login",
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
  {
    title: "Signup",
    path: "/signup",
    component: () => <SignUp />,
    protected: "guest",
  },
  {
    title: "Kontakt",
    path: "/contact",
    component: () => <Contact />,
    protected: "user",
  },
  {
    title: "Admin",
    path: "/admin",
    component: () => <Admin />,
    protected: "admin",
  },
  {
    title: "AddProducts",
    path: "/addproducts",
    component: () => <AddProducts />,
    protected: "admin",
  },
];
export default routes;
