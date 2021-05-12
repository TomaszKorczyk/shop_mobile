import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full h-2/3 flex flex-wrap anime">
      <div className="grid w-full h-12 justify-center border-t bg-blue-300 dark:bg-gray-800 dark:text-white lg:flex lg:h-16 lg:justify-start lg:pl-5 anime">
        <p className="text-2xl font-bold w-full m-auto">Hello Admin</p>
      </div>
      <div className="flex w-full h-1/2 px-2 md:flex-nowrap dark:text-white">
        <div className="flex w-full h-full justify-center py-2 sm:items-center">
          <Link to="/addproducts" className="grid cursor-pointer">
            <i className="fas fa-shopping-cart flex w-full justify-center"></i>
            <p className="grid pt-1 w-full">Dodaj product</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
