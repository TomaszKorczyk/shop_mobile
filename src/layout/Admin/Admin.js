import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="grid items-center h-screen w-full">
      <Link to="/addproducts" className="grid px-3 justify-center">
        <i className="fas fa-shopping-cart grid items-center justify-center"></i>
        <p className="grid pt-1">Dodaj product</p>
      </Link>
      <Link to="/login" className="grid justify-center px-3">
        <i className="fas fa-user grid items-center justify-center"></i>
        <p className="grid pt-1">Zaloguj</p>
      </Link>
    </div>
  );
}
