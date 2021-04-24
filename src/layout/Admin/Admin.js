import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="grid divide-y divide-black items-center h-96">
      <div className="flex w-full justify-center">
        <Link to="/addproducts" className="">
          <i className="fas fa-shopping-cart grid justify-center"></i>
          <p className="grid pt-1">Dodaj product</p>
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <Link to="/login" className="">
          <i className="fas fa-user flex justify-center mt-2"></i>
          <p className="grid pt-1">Zaloguj</p>
        </Link>
      </div>
    </div>
  );
}
