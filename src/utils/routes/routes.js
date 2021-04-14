import React from "react";
import Home from "../../layout/Home/Home";
import Contact from "../../layout/Contact/Contact";
import Admin from "../../layout/Admin/Admin";
import AddProducts from "../../layout/Admin/AddProduct/AddProducts";

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
