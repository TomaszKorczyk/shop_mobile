import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="grid w-full h-12 justify-center items-center top-0 bg-blue-300 lg:flex lg:h-16 lg:justify-start lg:pl-5">
        <p className="flex text-2xl font-bold">Admin</p>
      </div>
      <div className="flex flex-wrap h-52 w-full items-center justify-center divide-y divide-yellow-500 p-3 md:divide-y-0 md:flex-nowrap md:divide-x md:h-96">
        <div className="flex w-full h-1/2 justify-center mx-auto">
          <Link to="/addproducts" className="grid items-center cursor-pointer">
            <i className="fas fa-shopping-cart flex w-full justify-center mt-2"></i>
            <p className="grid pt-1 w-full">Dodaj product</p>
          </Link>
        </div>
        <div className="flex w-full h-1/2 justify-center mx-auto">
          <Link to="/login" className="grid items-center cursor-pointer">
            <i className="fas fa-user flex justify-center mt-2"></i>
            <p className="grid pt-1">Zaloguj</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
